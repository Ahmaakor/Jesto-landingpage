import Review from './Review';

function Epic() {
    return (
        <div className="epic">
            <div className="new-content">
                <h1>Start something epic</h1>
                <p>Connect with jesters who share your sense of humor. Join JestoBook today and discover your perfect comedic match.</p>
                <a href="#" className="button button-primary">Create Account</a>
            </div>


            
            <Review />
        </div>
    );
}

export default Epic;
