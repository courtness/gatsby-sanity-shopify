/* eslint-disable import/prefer-default-export */
import React from "react";
import PropTypes from "prop-types";

export const Logomark = ({ color, styles }) => (
  <svg css={styles} viewBox="0 0 56 57" fill="none">
    <path
      d="M56 28.0327V27.8407C56 24.1846 55.2758 20.5643 53.8686 17.1865C52.4615 13.8087 50.399 10.7396 47.799 8.15435C45.1989 5.5691 42.1123 3.51837 38.7151 2.11925C35.318 0.720121 31.677 0 28 0C20.5739 0 13.452 2.93321 8.20101 8.15435C2.94999 13.3755 0 20.4569 0 27.8407C0 27.928 0 28.0109 0 28.0982C0 28.1855 0 28.2117 0 28.2684C0 28.5521 0 28.8314 0.0307258 29.1064C0.331297 35.5892 2.89622 41.7648 7.28368 46.5694C11.6711 51.3741 17.6064 54.5069 24.0671 55.4283C25.3242 55.8273 26.6365 56.0276 27.9561 56.0218H28.0088C29.3207 56.0208 30.6247 55.8207 31.8758 55.4283C38.3656 54.5173 44.3296 51.3754 48.7324 46.548C53.1352 41.7206 55.6988 35.5125 55.9781 29.0016C55.9781 28.7267 56.0044 28.4474 55.9781 28.168L56 28.0327ZM44.1837 27.3955C44.1885 23.1859 43.7203 18.989 42.7879 14.8827C44.4594 15.388 46.0767 16.056 47.6162 16.8773C52.2251 19.3781 54.7841 22.9875 55.0782 27.3955H44.1837ZM28.4477 12.958C32.8127 12.927 37.1643 13.4402 41.4008 14.4855L28.4477 27.2515V12.958ZM27.5523 27.0595L14.6913 14.4026C18.909 13.4402 23.2251 12.97 27.5523 13.0016V27.0595ZM26.6393 27.4173H12.7293C12.7152 23.2734 13.2015 19.1427 14.1778 15.114L26.6393 27.4173ZM27.3986 28.2902L14.2304 41.2657C13.1877 37.0182 12.6834 32.6578 12.7293 28.2859L27.3986 28.2902ZM27.5523 29.3988V43.365C23.2782 43.3899 19.0169 42.8975 14.8625 41.8985L27.5523 29.3988ZM28.4302 29.1849L41.2648 41.8418C37.0672 42.8806 32.7558 43.3952 28.4302 43.3737V29.1849ZM28.8033 28.3121H43.2883C43.3414 32.6335 42.8563 36.9449 41.8442 41.1478L28.8033 28.3121ZM29.5626 27.4392L41.9451 15.2057C42.8361 19.208 43.2777 23.2963 43.262 27.3955L29.5626 27.4392ZM28.4477 12.0676V1.22204C31.5511 1.27128 34.5123 2.52421 36.6998 4.71358C38.7979 6.78669 40.4132 9.78505 41.5281 13.5996C37.2487 12.5517 32.8549 12.0371 28.4477 12.0676ZM27.5698 12.0676C23.2289 12.0409 18.8991 12.508 14.665 13.4599C15.1726 11.7824 15.8475 10.1595 16.6797 8.61539C19.2431 3.92799 23.0049 1.35297 27.5523 1.21768L27.5698 12.0676ZM11.8163 27.3955H0.921775C1.05007 24.4204 2.30436 21.6034 4.4333 19.509C6.51826 17.4228 9.53378 15.8167 13.3701 14.7081C12.3375 18.8591 11.8157 23.1194 11.8163 27.3955ZM0.904217 28.2684H11.8163C11.7757 32.7166 12.2978 37.1522 13.3701 41.4708C11.6278 40.964 9.94221 40.2811 8.33986 39.4326C3.76172 36.9493 1.21148 33.3704 0.926164 29.0496C0.912996 28.8052 0.908606 28.5434 0.904217 28.2859V28.2684ZM27.5523 44.2335V54.7692C26.4583 54.7506 25.3663 54.6676 24.2822 54.5205C22.5321 53.9339 20.9456 52.9456 19.6514 51.6356C17.5137 49.5406 15.837 46.5205 14.665 42.7714C18.8845 43.7827 23.2121 44.2795 27.5523 44.251V44.2335ZM28.4302 54.7692V44.251C32.7951 44.2674 37.1454 43.7499 41.3833 42.7103C40.8694 44.4294 40.1811 46.092 39.329 47.6727C37.3845 51.221 34.7641 53.5472 31.63 54.5466C30.5748 54.688 29.5123 54.7681 28.4477 54.7867L28.4302 54.7692ZM44.1706 28.2684H55.0826C55.0826 28.4866 55.0826 28.7049 55.0826 28.9187C54.9279 31.7696 53.6956 34.4572 51.6325 36.443C49.5081 38.5685 46.4706 40.24 42.7001 41.401C43.7373 37.1069 44.237 32.7018 44.1881 28.2859L44.1706 28.2684ZM54.4769 22.1582C53.1601 19.749 51.0005 17.7021 48.042 16.096C46.2817 15.1619 44.4262 14.4172 42.507 13.8745C41.3526 9.65412 39.6144 6.34588 37.3143 4.07638C36.2221 2.98395 34.9402 2.09681 33.5306 1.45772C38.6607 2.53001 43.3694 5.05478 47.089 8.7277C50.8087 12.4006 53.3805 17.0649 54.4944 22.1582H54.4769ZM22.7503 1.40098C19.9937 2.64048 17.663 4.92744 15.8721 8.18767C14.929 9.94646 14.1771 11.8002 13.6291 13.7174C9.38893 14.8652 6.06176 16.5848 3.77928 18.8805C2.91471 19.7362 2.17586 20.7089 1.58457 21.7698C2.77175 16.7117 5.39929 12.1007 9.15287 8.48843C12.9065 4.87617 17.6272 2.41557 22.7503 1.40098ZM1.78649 34.6929C3.10331 36.8751 5.17511 38.73 7.93165 40.2182C9.74931 41.1818 11.6671 41.9457 13.651 42.4965C14.8713 46.6427 16.6797 49.9727 19.0193 52.2859C19.6 52.8633 20.2317 53.3877 20.9067 53.8527C16.312 52.6024 12.1278 50.1747 8.77248 46.8124C5.41715 43.4502 3.00821 39.271 1.78649 34.6929ZM35.1152 53.8483C37.2235 52.3575 38.9423 50.3866 40.1279 48.1004C41.097 46.2982 41.8639 44.3955 42.4148 42.4266C46.5847 41.2133 49.9338 39.4108 52.2602 37.0846C53.0164 36.3386 53.6796 35.5048 54.2355 34.6012C53.0272 39.1955 50.6243 43.3927 47.2681 46.7712C43.9118 50.1497 39.7205 52.5904 35.1152 53.8483Z"
      fill={color}
    />
  </svg>
);

Logomark.defaultProps = {
  color: `black`,
  styles: []
};
Logomark.propTypes = {
  color: PropTypes.string,
  styles: PropTypes.arrayOf(PropTypes.shape({}))
};

export const Wordmark = ({ color, styles }) => (
  <svg css={styles} viewBox="0 0 191.62 53.26">
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <path
          fill={color}
          d="M7.46,29.12V53.26H0V0H7.46V22h5.61V0h7.45V53.26H13.07V29.12Z"
        />
        <path
          fill={color}
          d="M22.3,0H40.55V7H30.11V22H38.7v7.45H30.11V46.3H40.55v7H22.3Z"
        />
        <path
          fill={color}
          d="M55.11,25.92c3.62.78,7.81,3.13,7.81,8.88V46.3c0,6.25.85,7,.92,7H55.11V33.73c0-3.12-1.49-4-3.7-4H49.5V53.26H41.68V0h9.73c7,0,10.94,3,11.51,11.86l.14,2.2-.14,2.13c-.36,6.32-4.26,8.24-7.81,9.16ZM49.5,6.18V22h2c2.21,0,3.7-.93,3.63-4.05L55,14.06l.07-3.83c.07-3.13-1.42-4.05-3.63-4.05Z"
        />
        <path
          fill={color}
          d="M64.76,0H83V7H72.58V22h8.59v7.45H72.58V46.3H83v7H64.76Z"
        />
        <path
          fill={color}
          d="M92.13,45.59l-1.2,7.67H83.47L91.28,0h8.38l7.81,53.26H100l-1.21-7.67Zm1-6.25h4.68L95.75,26.28h-.56Z"
        />
        <path
          fill={color}
          d="M108,0h18.25V7H115.78V23.08H125v7.46h-9.23V46.3a33.56,33.56,0,0,0,.28,6,3.64,3.64,0,0,0,.29,1H108Z"
        />
        <path fill={color} d="M142,53.26h-7.81V7h-7.31V0H149.3V7H142Z" />
        <path
          fill={color}
          d="M150,0h18.25V7H157.82V22h8.59v7.45h-8.59V46.3h10.44v7H150Z"
        />
        <path
          fill={color}
          d="M182.89,25.92c3.62.78,7.81,3.13,7.81,8.88V46.3c0,6.25.85,7,.92,7h-8.73V33.73c0-3.12-1.49-4-3.69-4h-1.92V53.26h-7.81V0h9.73c7,0,10.93,3,11.5,11.86l.14,2.2-.14,2.13c-.35,6.32-4.26,8.24-7.81,9.16ZM177.28,6.18V22h2c2.2,0,3.69-.93,3.62-4.05l-.07-3.91.07-3.83c.07-3.13-1.42-4.05-3.62-4.05Z"
        />
      </g>
    </g>
  </svg>
);

Wordmark.defaultProps = {
  color: `black`,
  styles: []
};
Wordmark.propTypes = {
  color: PropTypes.string,
  styles: PropTypes.arrayOf(PropTypes.shape({}))
};
