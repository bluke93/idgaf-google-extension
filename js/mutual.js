document.addEventListener("load", init())

// CONFIG AND UTILS
var _sideMenuContainerSelector = "xh8yej3 x1iyjqo2";
var _sideMenu;
var _retry = 10;
var _mutualBtnIcon = '<?xml version="1.0" ?><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style></defs><title/><g data-name="79-users" id="_79-users"><circle class="cls-1" cx="16" cy="13" r="5"/><path class="cls-1" d="M23,28A7,7,0,0,0,9,28Z"/><path class="cls-1" d="M24,14a5,5,0,1,0-4-8"/><path class="cls-1" d="M25,24h6a7,7,0,0,0-7-7"/><path class="cls-1" d="M12,6a5,5,0,1,0-4,8"/><path class="cls-1" d="M8,17a7,7,0,0,0-7,7H7"/></g></svg>'


// GLOBAL VARS
var followers = [];
var followings = [];
var dontFollowMeBack = [];
var iDontFollowBack = [];


// MODAL
var _idgafOverlay;
var _idgafModal;


function init(){
  setupMutualModal();
  getSideMenuContainer();
  injectMutualBtn();
}

function injectMutualBtn(){
  if(_sideMenu != null){
    const mutualBtn = createMutualBtn(); 
    _sideMenu.appendChild(mutualBtn);
  } else {
    setTimeout(injectMutualBtn, 1000);
  }
}

function getSideMenuContainer(){
  const sideMenuContainer = document.getElementsByClassName(_sideMenuContainerSelector);
  const sideMenu = sideMenuContainer[0];
  if(typeof sideMenu != "undefined"){
    _sideMenu = sideMenu;
  } else {
    setTimeout(getSideMenuContainer, 1000);
  }
}

function createMutualBtn(){
  if(typeof _sideMenu != null){
    const originalMenuBtn = _sideMenu.firstChild;
    const newMenuBtn = originalMenuBtn.cloneNode(true);
    let labels = newMenuBtn.querySelectorAll('._aacl');
    for(const label of labels){
      label.innerHTML = "Mutual"
    }
    let icon = newMenuBtn.querySelector('svg._ab6-');
    icon.innerHTML = _mutualBtnIcon;
    newMenuBtn.addEventListener("click", instanceMutualWindow, false);
    return newMenuBtn;
  } else {
    setTimeout(createMutualBtn, 1000);
  }
}

function injectCSS(url){
  var link = document.createElement("link");
  console.log(url);
  link.href = url;
  link.type = "text/css";
  link.rel = "stylesheet";
  console.log(link);
  document.querySelector("head").appendChild(link);
}

function setupMutualModal(){
  // Create and add overlay
  let body = document.querySelector("body");
  _idgafOverlay = document.createElement("div");
  _idgafOverlay.setAttribute("id", "idgaf_overlay");
  body.appendChild(_idgafOverlay);

  // create and add modal
  _idgafModal = document.createElement("div");
  _idgafModal.setAttribute("id", "idgaf_modal");

  // create and add modal title
  let modalTitle = document.createElement("div");
  modalTitle.setAttribute("id", "idgaf_modal_title");
  modalTitle.innerHTML = "<p>IDGAFollow Results</p>";
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
    {name: "dontFollowMeBack", label: "Don't follow me back"}, 
    {name: "iDontFollowBack", label: "I don't follow back"}
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
    item.setAttribute("tab", tab.name); 
    item.setAttribute("class", "tab-content");
    modalTabContentsContainer.appendChild(item);
    item.textContent = tab.name
  })

  // append entire modal
  _idgafOverlay.appendChild(_idgafModal);

  let buttonsToBind = document.querySelectorAll('.tab-btn');

  buttonsToBind.forEach(btn => {
    btn.addEventListener('click', function handleClick(event) {
      console.log(event.target);
    });
  });
}

function switchTab(clickedItem){
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

function instanceMutualWindow(e){
  e.preventDefault();
  _idgafOverlay.classList.add("show");
}

async function openMutualWindow(e){
  // Avoid redirect from link
  e.preventDefault();
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

      console.log({ dontFollowMeBack });

      iDontFollowBack = followers.filter((follower) => {
        return !followings.find(
          (following) => following.id === follower.id
        );
      });

      console.log({ iDontFollowBack });

      console.log(
        `Process is done: Type 'copy(followers)' or 'copy(followings)' or 'copy(dontFollowBack)' in the console and paste it into a text editor to take a look at it'`
      );
    } catch (err) {
      console.log({ err });
    }
  })();
}

function checkUrl(){
  
}


async function getFollowList(){

}


async function getFollowersList(){

}
