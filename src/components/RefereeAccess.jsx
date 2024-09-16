// import { useSearchParams, Navigate } from 'react-router-dom'
// import useRefereeAccess from '../hooks/useRefereeAccess'
// import { ENABLE_REFEREE_FEATURE } from '../constants/featureFlags'
// import { RefereeRequest } from '../pages'

// const RefereeAccess = () => {
//   const [searchParams] = useSearchParams()
//   const token = searchParams.get('token')
//   const { isValid, isLoading, error } = useRefereeAccess(token)

//   if (ENABLE_REFEREE_FEATURE) {
//     return <RefereeRequest />
//   }

//   if (isLoading) {
//     return <div>Verifying access...</div>
//   }

//   if (error) {
//     return <div>Error: {error}</div>
//   }

//   if (isValid) {
//     return <Navigate to="/references" replace />
//   }

//   return <div>Invalid or expired token. Please request a new one.</div>
// }

// export default RefereeAccess