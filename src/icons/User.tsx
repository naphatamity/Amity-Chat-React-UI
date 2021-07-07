const Svg = ({ width, height }) => (
  <svg
    width={width || '100%'}
    height={height || '100%'}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="40" height="40" rx="20" fill="#D9E5FC" />
    <path
      d="M23.1255 13.1312C22.385 12.4069 21.3806 12 20.3333 12C19.2861 12 18.2817 12.4069 17.5412 13.1312C16.8006 13.8555 16.3846 14.8378 16.3846 15.8621C16.3846 16.8864 16.8006 17.8687 17.5412 18.593C18.2817 19.3172 19.2861 19.7241 20.3333 19.7241C21.3806 19.7241 22.385 19.3172 23.1255 18.593C23.866 17.8687 24.2821 16.8864 24.2821 15.8621C24.2821 14.8378 23.866 13.8555 23.1255 13.1312Z"
      fill="white"
    />
    <path
      d="M20.3333 21.931C16.2831 21.931 13 23.7848 13 26.069V28H27.6667V26.069C27.6667 23.7848 24.3836 21.931 20.3333 21.931Z"
      fill="white"
    />
  </svg>
);

export default Svg;

export const backgroundImage = `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='40' height='40' rx='20' fill='%23D9E5FC'/%3E%3Cpath d='M23.1255 13.1312C22.385 12.4069 21.3806 12 20.3333 12C19.2861 12 18.2817 12.4069 17.5412 13.1312C16.8006 13.8555 16.3846 14.8378 16.3846 15.8621C16.3846 16.8864 16.8006 17.8687 17.5412 18.593C18.2817 19.3172 19.2861 19.7241 20.3333 19.7241C21.3806 19.7241 22.385 19.3172 23.1255 18.593C23.866 17.8687 24.2821 16.8864 24.2821 15.8621C24.2821 14.8378 23.866 13.8555 23.1255 13.1312Z' fill='white'/%3E%3Cpath d='M20.3333 21.931C16.2831 21.931 13 23.7848 13 26.069V28H27.6667V26.069C27.6667 23.7848 24.3836 21.931 20.3333 21.931Z' fill='white'/%3E%3C/svg%3E");`;