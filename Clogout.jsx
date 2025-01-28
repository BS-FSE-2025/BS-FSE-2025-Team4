function logOut() {
    localStorage.clear();
    sessionStorage.clear(); 
    clearCache(); 
    window.location.href = "login.html"; 
  }
  function clearCache() {
    if ('caches' in window) {
        caches.keys().then(function(cacheNames) {
            cacheNames.forEach(function(cacheName) {
                caches.delete(cacheName); 
            });
        });
    }
  }