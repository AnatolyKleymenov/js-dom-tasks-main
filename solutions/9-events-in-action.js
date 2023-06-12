export default () => {
  const tabLists = document.querySelectorAll('[role="tablist"]');
  
  tabLists.forEach((tabList) => {
    const tabs = tabList.querySelectorAll('[data-bs-toggle="tab"], [data-bs-toggle="pill"]');
    
    tabs.forEach((tab) => {
      tab.addEventListener('click', (event) => {
        event.preventDefault();
        
        const targetId = event.target.dataset.bsTarget;
        const target = document.querySelector(targetId);
        
        const currentActiveTab = tabList.querySelector('.nav-link.active, .nav-item.active');
        
        if (currentActiveTab) {
          const currentActiveTabId = currentActiveTab.dataset.bsTarget;
          const currentActiveTarget = document.querySelector(currentActiveTabId);
          
          currentActiveTab.classList.remove('active');
          currentActiveTarget.classList.remove('active');
        }
        
        event.target.classList.add('active');
        target.classList.add('active');
      });
    });
  });
};
