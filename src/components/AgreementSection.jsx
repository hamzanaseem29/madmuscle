import Link from 'next/link';
const AgreementSection = ({ onCheckboxChange, errors }) => {
    return (
      <div className="agreement-container mt-10 lg:mt-16 z-50 relative text-[#5b5b5b] text-[11px] lg:text-[13px] lg:px-0 text-left px-3 ">
        <label id="terms-wrapper" className="terms-label custom-flex" tabIndex="0">
          <input
            name="agreeWithPolicy"
            type="checkbox"
            className="custom-checkbox"
            onChange={onCheckboxChange}
          />
          <span className="checkbox-custom"></span>
          <span className="terms-text">
            By continuing,&nbsp;you agree to our <a href="/terms-of-service">Terms of service</a> and acknowledge our <Link href="/privacy-policy">Privacy policy</Link> and <Link href="/cookie-policy">Cookie policy</Link>
          </span>
        </label>
        <label id="updates-wrapper" className="updates-label custom-flex" tabIndex="0">
          <input
            name="receiveUpdates"
            type="checkbox"
            className="custom-checkbox"
            onChange={onCheckboxChange}
          />
          <span className="checkbox-custom"></span>
          <span className="updates-text">
            I would like to receive updates about products, services, and special offers from MadMuscles via email
          </span>
        </label>
        {errors && <p className=" text-white text-sm flex items-center gap-5 bg-[#E22336] mt-10 p-4"><svg width="24" height="24" fill="none" viewBox="0 0 24 24" class="sc-356101ac-0 sc-356101ac-1 jhzmfe fedrEd"><svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10M12 16v-4M12 8h.01"></path></svg></svg> To continue, please accept our terms and policies.</p>}
        <p className='text-left lg:pb-0 pb-5 lg:mt-5'>We recommend that you consult with your physician before beginning any exercise program</p>
      </div>
    );
  };

export default AgreementSection;
