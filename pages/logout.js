const logout = async () => {
    try {
        const response = await fetch ('http://127.0.0.1:3000/api/logout', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
        });
        if (response.ok) {
            localStorage.removeItem('token');
            window.location.href = '/login';
        } else {
            console.log('Logout failed:', response.statusText);
        }
    } catch (error) {
        console.error('Logout error:', error);
    }
};

export default logout;