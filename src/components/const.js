export const AppRoute = {
    main: '/',
    service: '/services/',
    login: '/login/',
    profile: '/user/'
}

export const URLs = {
    services: 'https://673423afa042ab85d1190055.mockapi.io/api/v1/services',
    news: 'https://673423afa042ab85d1190055.mockapi.io/api/v1/main'
}

export const API_PATH = "https://673423afa042ab85d1190055.mockapi.io/api/v1"
export const API_AUTH_PATH = "https://dummyjson.com/auth"

export const getStyleForNavLink = ({ isActive }) => ({
    cursor: 'pointer',
    color: isActive ? '#000000' : '#007bff',
    backgroundColor: isActive ? '#e7f3ff' : 'transparent',
    textDecoration: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    opacity: isActive ? 1 : 0.8,
    transition: 'background-color 0.3s, color 0.3s, opacity 0.3s',
    '&:hover': {
        backgroundColor: isActive ? '#d9edf7' : '#f8f9fa',
        color: isActive ? '#000000' : '#0056b3',
        opacity: 1,
    }
});