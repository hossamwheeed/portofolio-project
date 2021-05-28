
import { IntouchContainer, Touch, TouchBox, TouchContent } from './Intouch.styles';
import { FaMapMarkerAlt, FaPhoneAlt, FaMobileAlt, FaEnvelope } from 'react-icons/fa';

const Intouch = ({ direction, directionChild }) => {
  return (
    <IntouchContainer>
      <h2>Get In Touch</h2>
      <Touch>
        <TouchBox>
          <h3>Head Office</h3>
          <TouchContent>
            <div>
              <i className="icon">
                <FaMapMarkerAlt />
              </i>
              <span> ٦٨ج برج قصر طيبة المريوطية فيصل</span>
            </div>
            <div>
              <i className="icon">
                <FaMobileAlt />
              </i>
              <a href="tel:+201092090391">+2-01092090391</a>
            </div>
            <div>
              <i className="icon">
                <FaPhoneAlt />
              </i>
              <a href="tel:+237710022">+2-37710022</a>
            </div>
            <div>
              <i className="icon">
                <FaPhoneAlt />
              </i>
              <a href="tel:+237457385">+2-37457385</a>
            </div>
            <div>
              <i className="icon">
                <FaEnvelope />
              </i>
              <a href="mailto:info@yanabe3.com">info@yanabe3.com</a>
            </div>
          </TouchContent>
        </TouchBox>
        <TouchBox>
          <h3>Maintenance center :amp& Store</h3>
          <TouchContent>
            <div>
              <i className="icon">
                <FaMapMarkerAlt />
              </i>
              <span>المنطقة الصناعية بابورواش ك ٢٦ طريق القاهرة الاسكندرية الصحرواي</span>
            </div>
            <div>
              <i className="icon">
                <FaMobileAlt />
              </i>
              <a href="tel:+201092090391">+2-01092090391</a>
            </div>
            <div>
              <i className="icon">
                <FaPhoneAlt />
              </i>
              <a href="tel:+237710022">+2-37710022</a>
            </div>
            <div>
              <i className="icon">
                <FaPhoneAlt />
              </i>
              <a href="tel:+237457385">+2-37457385</a>
            </div>
            <div>
              <i className="icon">
                <FaEnvelope />
              </i>
              <a href="mailto:info@yanabe3.com">info@yanabe3.com</a>
            </div>
          </TouchContent>
        </TouchBox>
      </Touch>
    </IntouchContainer>
  )
}

export default Intouch;