

import './index.css'

const UserOption = props => {
    const {userDetails, onChanceName} = props
    const {id, userName, userProfileUrl} = userDetails


    const onClickChanceName = () =>{
        onChanceName(id, userName, userProfileUrl)
    }

    return(
        <li className='user-option' onClick={onClickChanceName}>
            <img src={userProfileUrl} className='user-profile-image' alt={userName} />
            <p className='user-name-text'>{userName}</p>
        </li>
    )
}

export default UserOption