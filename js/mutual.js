var _mutualBtnIcon = '<?xml version="1.0" ?><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style></defs><title/><g data-name="79-users" id="_79-users"><circle class="cls-1" cx="16" cy="13" r="5"/><path class="cls-1" d="M23,28A7,7,0,0,0,9,28Z"/><path class="cls-1" d="M24,14a5,5,0,1,0-4-8"/><path class="cls-1" d="M25,24h6a7,7,0,0,0-7-7"/><path class="cls-1" d="M12,6a5,5,0,1,0-4,8"/><path class="cls-1" d="M8,17a7,7,0,0,0-7,7H7"/></g></svg>';

var _widgetStyles = `
  :host {
    all: initial;

    /* color tokens */
    --ig-surface: #ffffff;
    --ig-text: #262626;
    --ig-text-secondary: #8e8e8e;
    --ig-border: #dbdbdb;
    --ig-hover: #fafafa;
    --ig-primary: #0095f6;
    --ig-primary-hover: #1877f2;
    --ig-secondary-bg: #efefef;
    --ig-secondary-hover: #dbdbdb;
    --ig-overlay: rgba(0, 0, 0, 0.65);
    --ig-shadow: rgba(0, 0, 0, 0.15);
    --ig-danger: #ed4956;

    /* spacing tokens */
    --ig-space-1: 4px;
    --ig-space-2: 6px;
    --ig-space-3: 8px;
    --ig-space-4: 10px;
    --ig-space-5: 12px;
    --ig-space-6: 14px;
    --ig-space-7: 16px;
    --ig-space-8: 20px;
    --ig-space-9: 24px;

    /* radius tokens */
    --ig-radius-sm: 4px;
    --ig-radius-md: 8px;
    --ig-radius-lg: 12px;
    --ig-radius-full: 100%;

    /* type tokens */
    --ig-font-size-sm: 12px;
    --ig-font-size-base: 13px;
    --ig-font-size-md: 14px;
    --ig-font-size-lg: 16px;

    /* size tokens */
    --ig-fab-size: 48px;
    --ig-fab-icon-size: 24px;
    --ig-avatar-size: 44px;
    --ig-spinner-size: 32px;

    --ig-transition: 0.15s ease;

    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  }

  @media (prefers-color-scheme: dark) {
    :host {
      --ig-surface: #000000;
      --ig-text: #f5f5f5;
      --ig-text-secondary: #a8a8a8;
      --ig-border: #363636;
      --ig-hover: #121212;
      --ig-secondary-bg: #363636;
      --ig-secondary-hover: #262626;
      --ig-shadow: rgba(0, 0, 0, 0.6);
    }
  }

  #idgaf_fab {
    position: fixed;
    bottom: var(--ig-space-9);
    right: var(--ig-space-9);
    width: var(--ig-fab-size);
    height: var(--ig-fab-size);
    border-radius: var(--ig-radius-full);
    background-color: var(--ig-surface);
    box-shadow: 0 1px 4px var(--ig-shadow);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 2147483647;
    border: 1px solid var(--ig-border);
    transition: box-shadow var(--ig-transition), border-color var(--ig-transition);
  }

  #idgaf_fab:hover {
    box-shadow: 0 2px 8px var(--ig-shadow);
    border-color: var(--ig-text-secondary);
  }

  #idgaf_fab svg {
    width: var(--ig-fab-icon-size);
    height: var(--ig-fab-icon-size);
  }

  #idgaf_fab svg .cls-1 {
    stroke: var(--ig-text);
  }

  #idgaf_overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: var(--ig-overlay);
    z-index: 2147483647;
    display: none;
    font-family: inherit;
  }

  #idgaf_overlay.show {
    display: block;
  }

  #idgaf_modal {
    box-shadow: 0 12px 28px var(--ig-shadow);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--ig-surface);
    border-radius: var(--ig-radius-lg);
    border: 1px solid var(--ig-border);
    color: var(--ig-text);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 675px;
    min-height: 200px;
    max-height: 70%;
  }

  #idgaf_modal_title {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--ig-font-size-lg);
    font-weight: 600;
    width: 100%;
    padding: var(--ig-space-6) 0;
    border-bottom: 1px solid var(--ig-border);
  }

  #idgaf_modal_title p {
    margin: 0;
  }

  #idgaf_refresh_btn {
    position: absolute;
    right: var(--ig-space-6);
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    padding: var(--ig-space-1);
    font-size: var(--ig-font-size-lg);
    line-height: 1;
    color: var(--ig-text-secondary);
    cursor: pointer;
    transition: color var(--ig-transition);
  }

  #idgaf_refresh_btn:hover {
    color: var(--ig-text);
  }

  #idgaf_refresh_btn:disabled {
    color: var(--ig-border);
    cursor: default;
  }

  #idgaf_modal_content {
    text-align: left;
    width: auto;
    height: fit-content;
  }

  #idgaf_modal_tab_buttons {
    display: flex;
    flex-direction: row;
    align-content: center;
    width: 100%;
    border-bottom: 1px solid var(--ig-border);
  }

  .tab-btn {
    padding: var(--ig-space-5);
    width: 50%;
    text-align: center;
    font-size: var(--ig-font-size-base);
    color: var(--ig-text-secondary);
  }

  .tab-btn .tab_count {
    color: inherit;
  }

  .tab-btn.active {
    border-bottom: 1px solid var(--ig-text);
    margin-bottom: -1px;
    font-weight: 600;
    color: var(--ig-text);
  }

  .tab-btn:hover {
    cursor: pointer;
  }

  .tab-content {
    display: none;
    width: 100%;
    flex-direction: column;
    overflow: hidden scroll;
    padding: 0;
    height: 500px;
  }

  .tab-content.active {
    display: flex;
  }

  .tab-content p {
    padding: var(--ig-space-8);
    color: var(--ig-text-secondary);
    font-size: var(--ig-font-size-base);
    line-height: 1.4;
  }

  #idgaf_modal_tab_container {
    display: none;
    flex-direction: column;
  }

  #idgaf_modal.state-ready #idgaf_modal_tab_container {
    display: flex;
  }

  #idgaf_modal.state-ready #idgaf_status_panel {
    display: none;
  }

  #idgaf_status_panel {
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--ig-space-7);
    padding: var(--ig-space-9) var(--ig-space-8);
    height: 500px;
    text-align: center;
  }

  #idgaf_modal.state-loading #idgaf_status_panel {
    display: flex;
  }

  .idgaf_spinner {
    width: var(--ig-spinner-size);
    height: var(--ig-spinner-size);
    border-radius: var(--ig-radius-full);
    border: 3px solid var(--ig-border);
    border-top-color: var(--ig-primary);
    animation: idgaf_spin 0.8s linear infinite;
  }

  @keyframes idgaf_spin {
    to {
      transform: rotate(360deg);
    }
  }

  .idgaf_steps {
    display: flex;
    flex-direction: column;
    gap: var(--ig-space-3);
  }

  .idgaf_step {
    font-size: var(--ig-font-size-base);
    color: var(--ig-text-secondary);
    transition: color var(--ig-transition);
  }

  .idgaf_step.active {
    color: var(--ig-text);
    font-weight: 600;
  }

  .idgaf_step.done::before {
    content: "\\2713  ";
    color: var(--ig-primary);
  }

  #idgaf_status_message {
    font-size: var(--ig-font-size-base);
    color: var(--ig-text-secondary);
    line-height: 1.4;
  }

  #idgaf_status_message.idgaf_error_text {
    color: var(--ig-danger);
  }

  .idgaf_text_btn {
    background: none;
    border: none;
    font-size: var(--ig-font-size-base);
    font-weight: 600;
    color: var(--ig-primary);
    cursor: pointer;
    padding: var(--ig-space-3) var(--ig-space-7);
  }

  .idgaf_text_btn:hover {
    color: var(--ig-primary-hover);
  }

  #idgaf_stop_btn {
    color: var(--ig-danger);
  }

  .idgaf_user_item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: var(--ig-space-4) var(--ig-space-7);
  }

  .idgaf_user_item:hover {
    background-color: var(--ig-hover);
  }

  .idgaf_user_item .profile_pic {
    border-radius: var(--ig-radius-full);
    width: var(--ig-avatar-size);
    height: var(--ig-avatar-size);
  }

  .idgaf_user_item .profile_names {
    display: flex;
    flex-direction: column;
    padding: 0 var(--ig-space-4);
    width: 40%;
  }

  .idgaf_user_item .profile_names .username {
    color: var(--ig-text);
    text-decoration: none;
    font-weight: 600;
    font-size: var(--ig-font-size-md);
  }

  .idgaf_user_item .profile_names .full_name {
    color: var(--ig-text-secondary);
    text-decoration: none;
    font-size: var(--ig-font-size-md);
  }

  .idgaf_user_item .actions {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .idgaf_user_item .actions .action_btn {
    padding: var(--ig-space-2) var(--ig-space-7);
    border-radius: var(--ig-radius-md);
    margin-left: var(--ig-space-3);
    font-weight: 600;
    font-size: var(--ig-font-size-md);
  }

  .idgaf_user_item .actions .action_btn:hover {
    cursor: pointer;
  }

  .idgaf_user_item .actions .action_btn.primary {
    background: var(--ig-primary);
    color: #ffffff;
  }

  .idgaf_user_item .actions .action_btn.primary:hover {
    background: var(--ig-primary-hover);
  }

  .idgaf_user_item .actions .action_btn.secondary {
    background: var(--ig-secondary-bg);
    color: var(--ig-text);
  }

  .idgaf_user_item .actions .action_btn.secondary:hover {
    background: var(--ig-secondary-hover);
  }
`;

var followers = [];
var followings = [];
var dontFollowMeBack = [];
var iDontFollowBack = [];

var _shadowRoot;
var _idgafOverlay;
var _idgafModal;
var _refreshBtn;
var _stopBtn;
var _spinner;
var _stepLabels = {};

var _hasLoaded = false;
var _isLoading = false;
var _abortController = null;

var _stepOrder = ["followers", "following", "compare", "ready"];

// JS initialization
function init() {
  mountIdgafWidget();
}

// Build the floating widget in an isolated shadow root, independent of
// Instagram's own DOM/CSS so it survives markup/class-name churn.
function mountIdgafWidget() {
  if (document.getElementById("idgaf_host")) {
    return; // already mounted
  }

  const host = document.createElement("div");
  host.id = "idgaf_host";
  document.documentElement.appendChild(host);

  _shadowRoot = host.attachShadow({ mode: "closed" });

  const style = document.createElement("style");
  style.textContent = _widgetStyles;
  _shadowRoot.appendChild(style);

  setupMutualModal();
  setupFab();
}

function setupFab() {
  const fab = document.createElement("div");
  fab.setAttribute("id", "idgaf_fab");
  fab.innerHTML = _mutualBtnIcon;
  fab.addEventListener("click", openMutualWindow);
  _shadowRoot.appendChild(fab);
}

// Setup DOM elements
function setupMutualModal() {
  // Create and add overlay
  _idgafOverlay = document.createElement("div");
  _idgafOverlay.setAttribute("id", "idgaf_overlay");
  _shadowRoot.appendChild(_idgafOverlay);
  _idgafOverlay.addEventListener("click", closeModal);

  // create and add modal
  _idgafModal = document.createElement("div");
  _idgafModal.setAttribute("id", "idgaf_modal");

  // create and add modal title + refresh action
  let modalTitle = document.createElement("div");
  modalTitle.setAttribute("id", "idgaf_modal_title");
  modalTitle.innerHTML = `<p>${chrome.i18n.getMessage("results")}</p>`;

  _refreshBtn = document.createElement("button");
  _refreshBtn.setAttribute("id", "idgaf_refresh_btn");
  _refreshBtn.setAttribute("type", "button");
  _refreshBtn.setAttribute("title", chrome.i18n.getMessage("refreshBtn"));
  _refreshBtn.textContent = "⟳";
  _refreshBtn.addEventListener("click", () => {
    if (_isLoading) return;
    startLoad();
  });
  modalTitle.appendChild(_refreshBtn);
  _idgafModal.appendChild(modalTitle);

  // create and add content div
  let modalContent = document.createElement("div");
  modalContent.setAttribute("id", "idgaf_modal_content");
  _idgafModal.appendChild(modalContent);

  // create and add the loading status panel (spinner + steps + stop button)
  modalContent.appendChild(buildStatusPanel());

  // create and add tab system container
  let modalTabContainer = document.createElement("div");
  modalTabContainer.setAttribute("id", "idgaf_modal_tab_container");
  modalContent.appendChild(modalTabContainer);

  // create and add tab system buttons container
  let modalTabButtonContainer = document.createElement("div");
  modalTabButtonContainer.setAttribute("id", "idgaf_modal_tab_buttons");
  modalTabContainer.appendChild(modalTabButtonContainer);

  let tabs = [
    { name: "dontFollowMeBack", label: chrome.i18n.getMessage("dontFollowMeBack") },
    { name: "iDontFollowBack", label: chrome.i18n.getMessage("iDontFollowBack") },
  ];

  // create and add tabs buttons
  tabs.forEach((tab) => {
    let item = document.createElement("div");
    item.setAttribute("id", tab.name);
    item.setAttribute("class", "tab-btn");
    item.innerHTML = `<span class="tab_label">${tab.label}</span> <span class="tab_count"></span>`;
    modalTabButtonContainer.appendChild(item);
  });

  // create and add tab system tabs container
  let modalTabContentsContainer = document.createElement("div");
  modalTabContentsContainer.setAttribute("id", "idgaf_modal_tab_contents");
  modalTabContainer.appendChild(modalTabContentsContainer);

  // create and add tabs elements
  tabs.forEach((tab) => {
    let item = document.createElement("div");
    item.setAttribute("id", `${tab.name}_tab`);
    item.setAttribute("tab", tab.name);
    item.setAttribute("class", "tab-content");
    modalTabContentsContainer.appendChild(item);
  });

  // append entire modal
  _idgafOverlay.appendChild(_idgafModal);

  // Bind click events on tab buttons to allow switch tab
  let buttonsToBind = _shadowRoot.querySelectorAll(".tab-btn");
  buttonsToBind.forEach((btn) => {
    btn.addEventListener("click", switchTab);
  });
}

function buildStatusPanel() {
  let statusPanel = document.createElement("div");
  statusPanel.setAttribute("id", "idgaf_status_panel");

  _spinner = document.createElement("div");
  _spinner.setAttribute("id", "idgaf_spinner");
  _spinner.className = "idgaf_spinner";
  statusPanel.appendChild(_spinner);

  let stepsContainer = document.createElement("div");
  stepsContainer.className = "idgaf_steps";

  const stepDefs = [
    { key: "followers", label: chrome.i18n.getMessage("stepFollowers") },
    { key: "following", label: chrome.i18n.getMessage("stepFollowing") },
    { key: "compare", label: chrome.i18n.getMessage("stepComparing") },
    { key: "ready", label: chrome.i18n.getMessage("stepReady") },
  ];

  stepDefs.forEach((step) => {
    _stepLabels[step.key] = step.label;
    let stepEl = document.createElement("div");
    stepEl.setAttribute("id", `idgaf_step_${step.key}`);
    stepEl.className = "idgaf_step pending";
    stepEl.textContent = step.label;
    stepsContainer.appendChild(stepEl);
  });
  statusPanel.appendChild(stepsContainer);

  let statusMessage = document.createElement("div");
  statusMessage.setAttribute("id", "idgaf_status_message");
  statusMessage.style.display = "none";
  statusPanel.appendChild(statusMessage);

  _stopBtn = document.createElement("button");
  _stopBtn.setAttribute("id", "idgaf_stop_btn");
  _stopBtn.setAttribute("type", "button");
  _stopBtn.className = "idgaf_text_btn";
  _stopBtn.textContent = chrome.i18n.getMessage("stopBtn");
  _stopBtn.addEventListener("click", stopLoading);
  statusPanel.appendChild(_stopBtn);

  return statusPanel;
}

function openMutualWindow(e) {
  e.preventDefault();
  openModal();
  if (!_hasLoaded && !_isLoading) {
    startLoad();
  }
}

// modal actions
function switchTab(event) {
  const clickedItem = event.currentTarget;
  let tabName = clickedItem.getAttribute("id");
  if (!clickedItem.classList.contains("active")) {
    let buttons = _shadowRoot.querySelectorAll(".tab-btn");
    for (let btn of buttons) {
      btn.classList.remove("active");
    }
    clickedItem.classList.add("active");
    let tabs = _shadowRoot.querySelectorAll(".tab-content");
    for (let tab of tabs) {
      if (tab.getAttribute("tab") != tabName) {
        tab.classList.remove("active");
      } else {
        if (!tab.classList.contains("active")) {
          tab.classList.add("active");
        }
      }
    }
  }
}

function resetData() {
  followers = [];
  followings = [];
  dontFollowMeBack = [];
  iDontFollowBack = [];
}

function resetSteps() {
  _stepOrder.forEach((key) => setStep(key, "pending"));
}

function setStep(key, state, count) {
  const el = _shadowRoot.getElementById(`idgaf_step_${key}`);
  if (!el) return;
  el.classList.remove("pending", "active", "done");
  el.classList.add(state);
  const baseLabel = _stepLabels[key];
  el.textContent = typeof count === "number" ? `${baseLabel} (${count})` : baseLabel;
}

function showStatusMessage(html, isError) {
  const el = _shadowRoot.getElementById("idgaf_status_message");
  if (!el) return;
  el.innerHTML = html;
  el.classList.toggle("idgaf_error_text", !!isError);
  el.style.display = "block";
}

function hideStatusMessage() {
  const el = _shadowRoot.getElementById("idgaf_status_message");
  if (!el) return;
  el.style.display = "none";
  el.innerHTML = "";
}

function setTabCount(tabName, count) {
  const btn = _shadowRoot.getElementById(tabName);
  if (!btn) return;
  const countEl = btn.querySelector(".tab_count");
  if (countEl) countEl.textContent = `(${count})`;
}

function startLoad() {
  resetData();
  resetSteps();
  hideStatusMessage();
  _hasLoaded = false;
  _isLoading = true;
  if (_spinner) _spinner.style.display = "block";
  if (_stopBtn) _stopBtn.style.display = "inline-block";
  if (_refreshBtn) _refreshBtn.disabled = true;
  _idgafModal.classList.add("state-loading");
  _idgafModal.classList.remove("state-ready");
  loadMutual();
}

function stopLoading() {
  if (_abortController) {
    _abortController.abort();
  }
}

function finishLoad() {
  _hasLoaded = true;
  _isLoading = false;
  _abortController = null;
  if (_refreshBtn) _refreshBtn.disabled = false;
  _idgafModal.classList.remove("state-loading");
  _idgafModal.classList.add("state-ready");
}

async function loadMutual() {
  // Avoid redirect from link
  const username = window.location.pathname;
  _abortController = new AbortController();
  const signal = _abortController.signal;

  try {
    setStep("followers", "active");

    const userQueryRes = await fetch(
      `https://www.instagram.com/web/search/topsearch/?query=${username}`,
      { signal }
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
          ),
        { signal }
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
                profile_pic_url: node.profile_pic_url,
              };
            })
          );
        });
      setStep("followers", "active", followers.length);
    }

    setStep("followers", "done", followers.length);
    console.log({ followers });

    setStep("following", "active");
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
          ),
        { signal }
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
                profile_pic_url: node.profile_pic_url,
              };
            })
          );
        });
      setStep("following", "active", followings.length);
    }

    setStep("following", "done", followings.length);
    console.log({ followings });

    setStep("compare", "active");

    dontFollowMeBack = followings.filter((following) => {
      return !followers.find((follower) => follower.id === following.id);
    });

    iDontFollowBack = followers.filter((follower) => {
      return !followings.find((following) => following.id === follower.id);
    });

    console.log({ dontFollowMeBack, iDontFollowBack });
    setStep("compare", "done");

    setStep("ready", "done");
    renderLists();
    finishLoad();
  } catch (err) {
    if (err && err.name === "AbortError") {
      showStopped();
    } else {
      console.log({ err });
      showLoadError(err);
    }
  }
}

function renderLists() {
  let parentDiv1 = _shadowRoot.querySelector("#dontFollowMeBack_tab");
  parentDiv1.innerHTML = "";
  dontFollowMeBack.forEach((user) => {
    parentDiv1.appendChild(createUserItem(user, "unfollow"));
  });

  let parentDiv2 = _shadowRoot.querySelector("#iDontFollowBack_tab");
  parentDiv2.innerHTML = "";
  iDontFollowBack.forEach((user) => {
    parentDiv2.appendChild(createUserItem(user, "follow"));
  });

  setTabCount("dontFollowMeBack", dontFollowMeBack.length);
  setTabCount("iDontFollowBack", iDontFollowBack.length);
}

function showLoadError(err) {
  _isLoading = false;
  _abortController = null;
  if (_spinner) _spinner.style.display = "none";
  if (_stopBtn) _stopBtn.style.display = "none";
  if (_refreshBtn) _refreshBtn.disabled = false;
  const detail = err && err.message ? err.message : "Please try again.";
  showStatusMessage(
    `Something went wrong while fetching your followers/following.<br/>${detail}`,
    true
  );
}

function showStopped() {
  _isLoading = false;
  _abortController = null;
  if (_spinner) _spinner.style.display = "none";
  if (_stopBtn) _stopBtn.style.display = "none";
  if (_refreshBtn) _refreshBtn.disabled = false;
  showStatusMessage(chrome.i18n.getMessage("stoppedMessage"));
}

function closeModal(event) {
  if (event.target === this) {
    _idgafOverlay.classList.remove("show");
  }
}

function openModal() {
  let allTabBtns = _idgafModal.querySelectorAll(".tab-btn");
  allTabBtns.forEach((item) => {
    item.classList.remove("active");
  });
  let allTabContents = _idgafModal.querySelectorAll(".tab-content");
  allTabContents.forEach((item) => {
    item.classList.remove("active");
  });

  let tabBtn = _idgafModal.querySelector(".tab-btn");
  if (tabBtn) tabBtn.classList.add("active");
  let tabContent = _idgafModal.querySelector(".tab-content");
  if (tabContent) tabContent.classList.add("active");

  _idgafOverlay.classList.add("show");
}

function createUserItem(user, action) {
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
  username.setAttribute("target", "_blank");
  username.textContent = user.username;

  // create fullname
  let fullname = document.createElement("a");
  fullname.classList.add("full_name");
  fullname.setAttribute("href", `https://www.instagram.com/${user.username}/`);
  fullname.setAttribute("target", "_blank");
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

init();
