export const isRefereeAccessAllowed = () => {
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get('from') === 'resume'
}