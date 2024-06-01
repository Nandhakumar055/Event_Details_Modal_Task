
import { FaRegTrashCan } from "react-icons/fa6";
import './index.css'


const CommentItems = props => {
    const {commentDetails, onDelete} = props
    const {id, userName, userProfileUrl, userComment,} = commentDetails


    const onClickDeleteIcon = () => {
        onDelete(id)
    }

    return (
        <li className="comments-item">
            <div className="comments-con">
                <img src={userProfileUrl} className="user-profile-image"  alt="profile" />
                <div>
                    <h4 className="com-user-name">{userName}</h4>
                    <p className="comments-text">{userComment}</p>
                </div>
            </div>
            <FaRegTrashCan className="trash-icon" onClick={onClickDeleteIcon}/>
        </li>
    )
}

export default CommentItems