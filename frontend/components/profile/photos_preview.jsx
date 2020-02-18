import React from 'react';
import Modal from '../modal'

class PhotosPreview extends React.Component {
    constructor(props) {
        super(props)

        }
        

    closeModalClickHandler() {
        // document.getElementById('photos-form-container').style.display = 'none'
        // document.getElementById('login-blackout').style.display = 'none'
        document.body.style.position = '';
    }



    render() {
        return(
            <>
            <div className="profile-overview">
                <header>
                    PROFILE PHOTOS
                </header>
                <div className="about-list-container">
                    <ul className="list-home-preview">
                    </ul>
                </div>
                <div>
                        <button onClick={() => dispatch(this.props.openModal('profile'))}></button>
                </div>
                    <header>
                    PHOTOS OF MY HOME
                </header>
                    <div className="about-list-container">
                        <ul className="list-home-preview">
                        </ul>
                    </div>
                    <div>
                        <button onClick={() => dispatch(this.props.openModal('home'))}></button>
                    </div>
            </div>
                <Modal 
                    profile={this.props.profile}
                    home={this.props.home}
                />
            </>
        )
    }
}


export default PhotosPreview;