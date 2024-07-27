import {useEffect} from 'react'
import Vara from 'vara';
import PropTypes from 'prop-types';

export default function VaraText({ text }) {

  VaraText.propTypes = {
    text: PropTypes.string
  }

  useEffect(() => {
    var vara = new Vara(
      "#vara-container",
      "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
      [
        {
          text: text,
          fontSize: 40,
          strokeWidth: .7,
          color: "#27f5b7",
          duration:2500
        },
      ]
    );
  }, []);

  return (<div id="vara-container" className="z-[20]"></div>);
}
