import "../App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function SafetyTips() {
  return (
    <>
      <Navbar />

      <div className="main-container">
        <h1 className="title">
          Safety Tips
        </h1>

        <div className="features">
          <div className="card">
            <h3>🚕 Travel Safety</h3>

            <p>
              Always share your live location
              while traveling alone.
            </p>
          </div>

          <div className="card">
            <h3>📱 Emergency Contacts</h3>

            <p>
              Keep trusted contacts saved for
              emergencies.
            </p>
          </div>

          <div className="card">
            <h3>🌙 Night Safety</h3>

            <p>
              Avoid isolated areas at night
              whenever possible.
            </p>
          </div>

          <div className="card">
            <h3>🚨 Quick Alert</h3>

            <p>
              Use SOS immediately if you feel
              unsafe.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SafetyTips;
<Footer />