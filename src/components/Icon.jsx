const icons = {
  suitcase: (
    <path d="M9 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1m4 0H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm-8 0h2m-10 5h18" />
  ),
  location: (
    <path d="M12 21s7-5.1 7-11a7 7 0 1 0-14 0c0 5.9 7 11 7 11Zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
  ),
  language: (
    <path d="M4 5h8m-4-2v2m3 0c-.8 4-3.4 7-7 9m1-5c1.2 2 3.1 3.7 5.5 5M13 19l4-9 4 9m-6.6-3h5.2" />
  ),
  email: <path d="M4 6h16v12H4V6Zm0 1 8 6 8-6" />,
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
  ),
  download: <path d="M12 3v11m0 0 4-4m-4 4-4-4M5 21h14" />,
  info: <path d="M12 11v6m0-10h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
}

function Icon({ name }) {
  return (
    <svg aria-hidden="true" className="icon" viewBox="0 0 24 24">
      {icons[name]}
    </svg>
  )
}

export default Icon
