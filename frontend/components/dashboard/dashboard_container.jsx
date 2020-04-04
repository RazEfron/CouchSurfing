import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchProfile, updateProfile } from '../../actions/profiles_actions';
import { fetchPhoto } from '../../actions/photos_actions';
import { fetchAllLocations } from '../../actions/locations_actions';
import { fetchAllConversations } from '../../actions/conversation_actions';
import { fetchAllMessages } from '../../actions/messages_actions';

const mapStateToProps = (state) => {
    
    return {
        profileId: state.session.profile_id,
        profile: state.entities.profiles[state.session.profile_id] ? state.entities.profiles[state.session.profile_id] : {},
        currentLocation: state.entities.locations && state.entities.profiles[state.session.profile_id] ? state.entities.locations[state.entities.profiles[state.session.profile_id].location_id] : {}

    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchProfile: (profileId) => dispatch(fetchProfile(profileId)),
        updateProfile: (profile) => dispatch(updateProfile(profile)),
        fetchPhoto: (photoId) => dispatch(fetchPhoto(photoId)),
        fetchAllLocations: () => dispatch(fetchAllLocations()),
        fetchAllConversations: (profileId) => dispatch(fetchAllConversations(profileId)),
        fetchAllMessages: (conversation, first) => dispatch(fetchAllMessages({ conversation, first })),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
