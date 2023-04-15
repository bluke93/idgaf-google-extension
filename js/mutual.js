document.addEventListener("load", init())


var _sideMenuContainerSelector = "xh8yej3 x1iyjqo2";
var _sideMenu;
var _retry = 10;
var _mutualBtnIcon = '<?xml version="1.0" ?><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style></defs><title/><g data-name="79-users" id="_79-users"><circle class="cls-1" cx="16" cy="13" r="5"/><path class="cls-1" d="M23,28A7,7,0,0,0,9,28Z"/><path class="cls-1" d="M24,14a5,5,0,1,0-4-8"/><path class="cls-1" d="M25,24h6a7,7,0,0,0-7-7"/><path class="cls-1" d="M12,6a5,5,0,1,0-4,8"/><path class="cls-1" d="M8,17a7,7,0,0,0-7,7H7"/></g></svg>'

var followers = [];
var followings = [];
var dontFollowMeBack = [];
var iDontFollowBack = [];

var _idgafOverlay;
var _idgafModal;
var _isLoading = true;


// JS initialization
function init(){
  setupMutualModal();
  getSideMenuContainer();
  injectMutualBtn();
}

// Setup DOM elements
function setupMutualModal(){
  // Create and add overlay
  let body = document.querySelector("body");
  _idgafOverlay = document.createElement("div");
  _idgafOverlay.setAttribute("id", "idgaf_overlay");
  body.appendChild(_idgafOverlay);
  _idgafOverlay.addEventListener("click", closeModal);

  // create and add modal
  _idgafModal = document.createElement("div");
  _idgafModal.setAttribute("id", "idgaf_modal");

  // create and add modal title
  let modalTitle = document.createElement("div");
  modalTitle.setAttribute("id", "idgaf_modal_title");
  modalTitle.innerHTML = `<p>${chrome.i18n.getMessage("results")}</p>`;
  _idgafModal.appendChild(modalTitle);

  // create and add content div
  let modalContent = document.createElement("div");
  modalContent.setAttribute("id", "idgaf_modal_content");
  _idgafModal.appendChild(modalContent);

  // create and add tab system container
  let modalTabContainer = document.createElement("div");
  modalTabContainer.setAttribute("id", "idgaf_modal_tab_container");
  modalContent.appendChild(modalTabContainer);

  // create and add tab system buttons container
  let modalTabButtonContainer = document.createElement("div");
  modalTabButtonContainer.setAttribute("id", "idgaf_modal_tab_buttons");
  modalTabContainer.appendChild(modalTabButtonContainer);

  let tabs = [ 
    {name: "dontFollowMeBack", label: chrome.i18n.getMessage("dontFollowMeBack")}, 
    {name: "iDontFollowBack", label: chrome.i18n.getMessage("iDontFollowBack")}
  ];

  // create and add tabs buttons 
  tabs.forEach((tab)=>{
    let item = document.createElement("div");
    item.setAttribute("id", tab.name); 
    item.setAttribute("class", "tab-btn"); 
    modalTabButtonContainer.appendChild(item);
    item.textContent = tab.label
  })

  // create and add tab system tabs container
  let modalTabContentsContainer = document.createElement("div");
  modalTabContentsContainer.setAttribute("id", "idgaf_modal_tab_contents");
  modalTabContainer.appendChild(modalTabContentsContainer);

  // create and add tabs elements 
  tabs.forEach((tab)=>{
    let item = document.createElement("div");
    item.setAttribute("id", `${tab.name}_tab`);
    item.setAttribute("tab", tab.name);
    item.setAttribute("class", "tab-content");
    modalTabContentsContainer.appendChild(item);
    item.innerHTML = "<p>Retrieving the list of your followers and follows.<br/>Please wait as it may take some time based on the total number of results.</p>";
  })

  // append entire modal
  _idgafOverlay.appendChild(_idgafModal);

  // Bind click events on tab buttons to allow switch tab
  let buttonsToBind = document.querySelectorAll('.tab-btn');
  buttonsToBind.forEach(btn => {
    btn.addEventListener('click', switchTab);
  });
}

function createMutualBtn(){
  if(typeof _sideMenu != null){
    // Get first menu item
    const originalMenuBtn = _sideMenu.firstChild;

    // clone it
    const newMenuBtn = originalMenuBtn.cloneNode(true);

    // get all labels and replace
    let labels = newMenuBtn.querySelectorAll('._aacl');
    for(const label of labels){
      label.innerHTML = "Mutual"
    }

    // get icon and replace
    let icon = newMenuBtn.querySelector('svg._ab6-');
    icon.innerHTML = _mutualBtnIcon;

    // attach new functionality and return
    newMenuBtn.addEventListener("click", openMutualWindow);
    return newMenuBtn;
  } else {
    // retry if not found
    setTimeout(createMutualBtn, 1000);
  }
}

function getSideMenuContainer(){
  // get menu
  const sideMenuContainer = document.getElementsByClassName(_sideMenuContainerSelector);
  const sideMenu = sideMenuContainer[0];
  if(typeof sideMenu != "undefined"){
    _sideMenu = sideMenu;
  } else {
    // retry if not found
    setTimeout(getSideMenuContainer, 1000);
  }
}

function injectMutualBtn(){
  if(_sideMenu != null){
    // create the new button and inject it into the menu
    const mutualBtn = createMutualBtn(); 
    _sideMenu.appendChild(mutualBtn);
  } else {
    // retry if fail
    setTimeout(injectMutualBtn, 1000);
  }
}

function openMutualWindow(e){
  e.preventDefault();
  openModal();
  loadMutual();
}

// modal actions
function switchTab(event){
  const clickedItem = event.target;
  let tabName = clickedItem.getAttribute("id");
  if(!clickedItem.classList.contains("active")){
    let buttons = document.querySelectorAll(".tab-btn");
    for(let btn of buttons){
      btn.classList.remove("active");
    }
    clickedItem.classList.add("active");
    let tabs = document.querySelectorAll(".tab-content");
    for(let tab of tabs){
      if(tab.getAttribute("tab") != tabName){
        tab.classList.remove("active");
      } else {
        if(!tab.classList.contains("active")){
          tab.classList.add("active");
        }
      }
    }
  }
}



async function loadMutual(){
  // Avoid redirect from link
  const username = window.location.pathname;
  (async () => {
    try {
      console.log(`Process started! Give it a couple of seconds`);

      const userQueryRes = await fetch(
        `https://www.instagram.com/web/search/topsearch/?query=${username}`
      );

      const userQueryJson = await userQueryRes.json();

      const userId = userQueryJson.users[0].user.pk;

      let after = null;
      let has_next = true;

      while (has_next) {
        await fetch(
          `https://www.instagram.com/graphql/query/?query_hash=c76146de99bb02f6415203be841dd25a&variables=` +
            encodeURIComponent(
              JSON.stringify({
                id: userId,
                include_reel: true,
                fetch_mutual: true,
                first: 50,
                after: after,
              })
            )
        )
          .then((res) => res.json())
          .then((res) => {
            has_next = res.data.user.edge_followed_by.page_info.has_next_page;
            after = res.data.user.edge_followed_by.page_info.end_cursor;
            followers = followers.concat(
              res.data.user.edge_followed_by.edges.map(({ node }) => {
                return {
                  id: node.id,
                  username: node.username,
                  full_name: node.full_name,
                  profile_pic_url: node.profile_pic_url
                };
              })
            );
          });
      }

      console.log({ followers });

      after = null;
      has_next = true;

      while (has_next) {
        await fetch(
          `https://www.instagram.com/graphql/query/?query_hash=d04b0a864b4b54837c0d870b0e77e076&variables=` +
            encodeURIComponent(
              JSON.stringify({
                id: userId,
                include_reel: true,
                fetch_mutual: true,
                first: 50,
                after: after,
              })
            )
        )
          .then((res) => res.json())
          .then((res) => {
            has_next = res.data.user.edge_follow.page_info.has_next_page;
            after = res.data.user.edge_follow.page_info.end_cursor;
            followings = followings.concat(
              res.data.user.edge_follow.edges.map(({ node }) => {
                return {
                  id: node.id,
                  username: node.username,
                  full_name: node.full_name,
                  profile_pic_url: node.profile_pic_url
                };
              })
            );
          });
      }

      console.log({ followings });

      dontFollowMeBack = followings.filter((following) => {
        return !followers.find(
          (follower) => follower.id === following.id
        );
      });

      let parentDiv1 = document.getElementById("dontFollowMeBack_tab");
      parentDiv1.innerHTML = "";
      dontFollowMeBack.forEach(user => {
        let userItem = createUserItem(user, "unfollow");
        parentDiv1.appendChild(userItem);
      })

      console.log({ dontFollowMeBack });

      

      iDontFollowBack = followers.filter((follower) => {
        return !followings.find(
          (following) => following.id === follower.id
        );
      });

      let parentDiv2 = document.getElementById("iDontFollowBack_tab");
      parentDiv2.innerHTML = "";
      iDontFollowBack.forEach(user => {
        let userItem = createUserItem(user, "follow");
        parentDiv2.appendChild(userItem);
      })

      console.log({ iDontFollowBack });

      _isLoading = false;

      
    } catch (err) {
      console.log({ err });
    }
  })();
}

function closeModal(event){
  if(event.target === this){
    followers = [];
    follows = [];
    iDontFollowBack = [];
    dontFollowMeBack = [];
    _idgafOverlay.classList.remove("show");
  }
}

function openModal(){
  _isLoading = true;
  // reset all tabs
  let allTabBtns = _idgafModal.querySelectorAll('.tab-btn');
  allTabBtns.forEach(item => {
    item.classList.remove('active');
  })
  let allTabContents = _idgafModal.querySelectorAll('.tab-content');
  allTabContents.forEach(item => {
    item.classList.remove('active');
  })

  // activate first tab
  let tabBtn = _idgafModal.querySelector('.tab-btn');
  tabBtn.classList.add('active');
  let tabContent = _idgafModal.querySelector('.tab-content');
  tabContent.classList.add('active');

  // show modal
  _idgafOverlay.classList.add("show");
}

function createUserItem(user, action){
  // Create user item container
  let userItem = document.createElement("div");
  userItem.setAttribute("id", `user_${user.id}`);
  userItem.classList.add("idgaf_user_item");

  // create user profile pic
  let profilePic = document.createElement("img");
  profilePic.classList.add("profile_pic");
  profilePic.src = user.profile_pic_url;
  userItem.appendChild(profilePic);

  // create container for username and fullname
  let profileNames = document.createElement("div");
  profileNames.classList.add("profile_names");

  // create username
  let username = document.createElement("a");
  username.classList.add("username");
  username.setAttribute("href", `https://www.instagram.com/${user.username}/`);
  username.setAttribute("target", "_blank")
  username.textContent = user.username;

  // create fullname
  let fullname = document.createElement("a");
  fullname.classList.add("full_name");
  fullname.setAttribute("href", `https://www.instagram.com/${user.username}/`);
  fullname.setAttribute("target", "_blank")
  fullname.textContent = user.full_name;

  profileNames.appendChild(username);
  profileNames.appendChild(fullname);
  userItem.appendChild(profileNames);

  // create action container
  let actions = document.createElement("div");
  actions.classList.add("actions");

  let primaryAction = document.createElement("div");
  primaryAction.classList.add("action_btn", "primary");
  primaryAction.textContent = chrome.i18n.getMessage(action);

  let goToProfile = document.createElement("div");
  goToProfile.classList.add("action_btn", "secondary");
  goToProfile.textContent = chrome.i18n.getMessage("goToProfile");

  actions.appendChild(primaryAction);
  actions.appendChild(goToProfile);
  userItem.appendChild(actions);

  return userItem;
}