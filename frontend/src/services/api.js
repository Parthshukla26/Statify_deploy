export const fetchGitHubData = async (username) => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/github-stats?username=${username}`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || 'Failed to fetch data from the server.');
    }
    
    return await response.json();
  };