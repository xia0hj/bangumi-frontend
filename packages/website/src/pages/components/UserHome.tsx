import { Typography } from '@bangumi/design'
import React from 'react'
import { useUser } from '../../hooks/use-user'
import { getUserProfileLink } from '../../utils/pages'
import styles from './UserHome.module.less'

const { Link } = Typography

const UserHome: React.FC = () => {
  const { user } = useUser()

  if (!user) {
    return null
  }

  return (
    <main className={styles.pageContainer}>
      <div className={styles.greets}>Hi! <Link to={getUserProfileLink(user.username)} isExternal>{user.nickname}</Link>
      </div>
    </main>
  )
}

export default UserHome
