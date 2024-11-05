import { Link } from 'react-router-dom';    

function Epic() {
    return (
        <>
        <div className="epic">
            <div className="new-content">
                <h1>Start Something Epic</h1>
                <p>Connect with jesters who share your sense of humor. Join JestoBook today and discover your perfect comedic match.</p>
                <Link to="/auth" className="button button-primary">Create Account</Link>
            </div>
        </div>
        </>
    );
}

export default Epic;
