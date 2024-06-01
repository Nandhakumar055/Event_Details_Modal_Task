import {Component} from 'react'
import { FaRegCircleCheck, FaRegUser } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { FaTrashAlt, FaRegStickyNote } from "react-icons/fa";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";


import UserOption from '../UserOption';
import CommentItems from '../CommentItems';
import './index.css'


const userOptionsList = [
    {
        id : 1,
        userName: "Jane Smith",
        userProfileUrl : "https://i.ibb.co/qsKZhpc/pexels-olly-733872.jpg" 
    },
    {
        id : 2,
        userName: "William",
        userProfileUrl : "https://i.ibb.co/gjyjNSP/usman-yousaf-q2q5-Cd-Lu-Wn-I-unsplash.jpg" 
    },
    {
        id : 3,
        userName: "Lily",
        userProfileUrl : "https://i.ibb.co/xGbkHxY/vince-veras-AJIq-ZDAUD7-A-unsplash.jpg"
    },
    {
        id : 4,
        userName: "Benjamin",
        userProfileUrl : "https://i.ibb.co/93NLmMf/usman-yousaf-y-IOVi-GQmj-J4-unsplash.jpg"
    },
    {
        id : 5,
        userName:"Ellis" ,
        userProfileUrl : "https://i.ibb.co/Js3wDJ8/andriyko-podilnyk-j-FAG-ix-Crs-M-unsplash.jpg"
    },
    {
        id : 6,
        userName: "Jeenny",
        userProfileUrl : "https://i.ibb.co/sFRzzrv/ilya-pavlov-x-E87-C-Ov-VO4-unsplash.jpg"
    },
    {
        id : 7,
        userName: "Jack" ,
        userProfileUrl : "https://i.ibb.co/9q6667Y/pexels-spencer-selover-142259-428333.jpg" 
    },
    {
        id : 8,
        userName: "Genic",
        userProfileUrl : "https://i.ibb.co/Z1gKtdN/allef-vinicius-Bq-NEe-ZAtxg-unsplash.jpg"
    },
    {
        id : 9,
        userName: "Krishtofer" ,
        userProfileUrl : "https://i.ibb.co/py5mWV0/pexels-stefanstefancik-91227.jpg"
    },
    // {
    //     id : 10,
    //     userName: "Nansy",
    //     userProfileUrl : "https://i.ibb.co/dKsL4SJ/max-felner-6u0xv4j6-WKI-unsplash.jpg"
    // },
    // {
    //     id : 11,
    //     userName: "Abisha",
    //     userProfileUrl : "https://i.ibb.co/pWsHcdJ/pexels-divinetechygirl-1181690.jpg"
    // },

    // {
    //     id : 12,
    //     userName: "Arban Shai",
    //     userProfileUrl : "https://i.ibb.co/vdqbgHZ/pexels-alex-190086-615482.jpg"
    // },

    // {
    //     id : 13,
    //     userName: "Jerry Jon",
    //     userProfileUrl : "https://i.ibb.co/TYLyrnP/pexels-vinicius-wiesehofer-289347-1090387.jpg"
    // },

    // {
    //     id : 14,
    //     userName: "Mergen" ,
    //     userProfileUrl : "https://i.ibb.co/fkZJ526/pexels-spencer-selover-142259-428333.jpg"
    // },
    // {
    //     id : 15,
    //     userName: "Mirdhula",
    //     userProfileUrl : "https://i.ibb.co/0KgSQwV/freestocks-ujd-Uqduw-Cls-unsplash.jpg"
    // },
    // {
    //     id : 16,
    //     userName: "Franklin" ,
    //     userProfileUrl : "https://i.ibb.co/MfmcmZ3/kamyar-ghalamchi-Uim-B8k0ibaw-unsplash.jpg"
    // },

]

const commentsList = [
    {   id : 1,
        userName: "Jane Smith",
        userComment: "Thanks for assigning me on the task. We'll get the details ironed out",
        userProfileUrl: "https://i.ibb.co/qsKZhpc/pexels-olly-733872.jpg",
    },
    {
        id : 2,
        userName: "Jane Smith",
        userComment: "I will do soon...",
        userProfileUrl: "https://i.ibb.co/qsKZhpc/pexels-olly-733872.jpg",
    }
]

class EventDetailsModal extends Component {
    state = {
        selectedNameId : 1,
        selectedName : userOptionsList[0].userName,
        selectedProfileUrl : userOptionsList[0].userProfileUrl,
        isShowNameItems : false,
        commentsList : commentsList,
        userComment : "",
    }

    onClickSelect = () => {
        this.setState(prevState => ({isShowNameItems : !prevState.isShowNameItems}))
    }


    onChanceName = (id, name, imagrUrl) => {
        this.setState({selectedNameId:id, selectedName:name, selectedProfileUrl:imagrUrl})
    }

    onChangeCommentsInput = event => {
        this.setState({userComment: event.target.value})
    } 


    onClickSendIcon = () => {
        const {userComment, selectedProfileUrl, selectedName, commentsList} = this.state

        const updateCommentsList = {
            id : commentsList.length + 1,
            userName : selectedName,
            userComment : userComment,
            userProfileUrl : selectedProfileUrl
        }

        if (userComment !== "") {
            this.setState(prevState => ({commentsList : [...prevState.commentsList, updateCommentsList], userComment : ""}))
        }
    }

    onDelete = (id) =>{
        const {commentsList} = this.state
        const onDlt = commentsList.filter(eachComment => (eachComment.id !== id))
        this.setState({commentsList: onDlt})
    }

    render(){
        const {selectedName, selectedProfileUrl, isShowNameItems, userComment, commentsList} = this.state
        return (
            <div className="event-detail-modal-main-container">
                <div className="event-detail-modal-container">
                    <div className="edit-container">
                        <FaRegCircleCheck size={25} className="check-icon"/>
                        <div>
                            <FaTrashAlt size={20} className="delete-icon" />
                            <RxCross2 size={20} className="cross-icon" />
                        </div>
                    </div>
                    <div className="input-container">
                        <input className="event-name-input" type="text" placeholder="event name type here" />
                        <input className="event-date-input" type="date" fontsize="12px" />
                    </div>
                    <div className="other-event-details-container">
                        <div className="other-details-container">
                            <div className="heading-con">
                                <FaRegUser size={20} color='#E92C2C'/>
                                <p className="assigin-to-text">Assign to:</p>
                            </div>
                            <div className="select-name-main-container">
                                <div className="selected-name-container" onClick={this.onClickSelect}>
                                    <div className="profile-con">
                                        <img src={selectedProfileUrl} className="user-profile-image" alt="profile"/>
                                        <h4 className="user-name">{selectedName}</h4>
                                    </div>    
                                    {isShowNameItems ? <IoMdArrowDropup size={25}/> : <IoMdArrowDropdown size={25}/>}
                                </div>
                                {isShowNameItems &&
                                (<ul className="user-name-select" >
                                    {userOptionsList.map(eachOption => (
                                        <UserOption userDetails={eachOption} key={eachOption.id} onChanceName={this.onChanceName}/>
                                    ))}
                                </ul>)
                                }
                            </div>
                        </div>
                        <div className="other-details-container">
                            <div className="heading-con">
                                <FaRegStickyNote size={20} color='#E92C2C'/>
                                <p className="assigin-to-text">Note:</p>
                            </div>
                            <textarea className="note"></textarea>
                        </div>
                    </div>
                    <div className="comments-section">
                        <h1 className="comments-heading" >Comments</h1>
                        <ul className="comments-list-container">
                            {commentsList.map(eachComment => (
                                <CommentItems commentDetails={eachComment} key={eachComment.id} onDelete={this.onDelete} />
                            ))}
                        </ul>
                        <div className="comments-type-container">
                            <img src={selectedProfileUrl} className="user-profile-image" alt="profile" />
                            <div className="comments-input-container">
                                <input className="comments-input" placeholder='Write comments...' type='text' onChange={this.onChangeCommentsInput} value={userComment}/>
                                <img src="https://i.ibb.co/wKqCr9J/icons8-send-32.png" onClick={this.onClickSendIcon} className="send-icon" alt="send-icon"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default EventDetailsModal