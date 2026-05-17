document.addEventListener('DOMContentLoaded', async () => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    // Not logged in
    window.location.href = '/login.html';
    return;
  }

  // Logout Handler
  document.getElementById('logout-btn').addEventListener('click', () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  });

  try {
    const res = await fetch('/api/user/dashboard', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    const data = await res.json();

    if (!res.ok) {
      if (res.status === 401 || res.status === 403) {
        // Invalid token
        localStorage.removeItem('token');
        window.location.href = '/login.html';
        return;
      }
      throw new Error(data.error || 'Failed to fetch dashboard config');
    }

    // Populate data
    document.getElementById('loading').style.display = 'none';
    document.getElementById('dashboard-content').style.display = 'grid';

    // Greeting
    document.getElementById('user-greeting').textContent = `Welcome, ${data.user.username}`;
    
    // Stats
    document.getElementById('stat-balance').textContent = `$${data.stats.balance.toFixed(2)}`;
    document.getElementById('stat-hours').textContent = data.stats.totalHoursPlayed;
    
    const sessionEl = document.getElementById('stat-session');
    if (data.stats.activeSession) {
      sessionEl.textContent = 'Online / ' + data.stats.activeSession;
      sessionEl.style.color = 'var(--accent-color)';
    } else {
      sessionEl.textContent = 'Offline';
    }

    document.getElementById('stat-game').textContent = data.stats.favoriteGame || 'None';

  } catch (err) {
    document.getElementById('loading').textContent = 'Error: ' + err.message;
    document.getElementById('loading').style.color = '#ff4b4b';
  }
});
