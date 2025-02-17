import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={styles.topFooter}>
        <div className={styles.column}>
          <h2>Company</h2>

          <ul>
            <li>About Us</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h2>Need Help</h2>

          <ul>
            <li>Visit Help Center?</li>
            <li>Share Feedback</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h2>View Website in</h2>
          <button className={styles.btn}>
            <svg
              width="19"
              height="14"
              viewBox="0 0 19 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 7.22872L6.46875 12.6789L17.4062 1"
                stroke="white"
                strokeOpacity="0.8"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            English
            <svg
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.703125 1L6.06027 6L10.7031 1"
                stroke="white"
                strokeOpacity="0.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <div className={styles.column}>
          <h2>Social Media</h2>

          <ul className={styles.list}>
            <li>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1_133)">
                  <path
                    d="M19.9804 5.88005C19.9336 4.81738 19.7617 4.0868 19.5156 3.45374C19.2616 2.78176 18.8709 2.18014 18.359 1.68002C17.8589 1.1721 17.2533 0.777435 16.5891 0.527447C15.9524 0.281274 15.2256 0.109427 14.1629 0.0625732C13.0923 0.0117516 12.7525 0 10.0371 0C7.32171 0 6.98183 0.0117516 5.91518 0.0586052C4.8525 0.105459 4.12192 0.277459 3.48902 0.523479C2.81689 0.777435 2.21527 1.16814 1.71514 1.68002C1.20723 2.18014 0.812713 2.78573 0.562573 3.44992C0.3164 4.0868 0.144553 4.81341 0.097699 5.87609C0.0468773 6.9467 0.0351257 7.28658 0.0351257 10.002C0.0351257 12.7173 0.0468773 13.0572 0.0937309 14.1239C0.140585 15.1865 0.312585 15.9171 0.558757 16.5502C0.812713 17.2221 1.20723 17.8238 1.71514 18.3239C2.21527 18.8318 2.82086 19.2265 3.48505 19.4765C4.12192 19.7226 4.84854 19.8945 5.91137 19.9413C6.97786 19.9883 7.31789 19.9999 10.0333 19.9999C12.7486 19.9999 13.0885 19.9883 14.1552 19.9413C15.2178 19.8945 15.9484 19.7226 16.5813 19.4765C17.9254 18.9568 18.9881 17.8941 19.5078 16.5502C19.7538 15.9133 19.9258 15.1865 19.9726 14.1239C20.0195 13.0572 20.0313 12.7173 20.0313 10.002C20.0313 7.28658 20.0273 6.9467 19.9804 5.88005ZM18.1794 14.0457C18.1364 15.0225 17.9723 15.5499 17.8355 15.9015C17.4995 16.7728 16.808 17.4643 15.9367 17.8004C15.585 17.9372 15.0538 18.1012 14.0808 18.1441C13.0259 18.1911 12.7096 18.2027 10.041 18.2027C7.37253 18.2027 7.05218 18.1911 6.00111 18.1441C5.02435 18.1012 4.4969 17.9372 4.14527 17.8004C3.71169 17.6402 3.31702 17.3862 2.99667 17.0541C2.66458 16.7298 2.41062 16.3391 2.25037 15.9055C2.11363 15.5539 1.94956 15.0225 1.90668 14.0497C1.85967 12.9948 1.84807 12.6783 1.84807 10.0097C1.84807 7.34122 1.85967 7.02087 1.90668 5.96995C1.94956 4.99319 2.11363 4.46575 2.25037 4.11412C2.41062 3.68038 2.66458 3.28586 3.00064 2.96536C3.3248 2.63327 3.7155 2.37931 4.14924 2.21921C4.50087 2.08247 5.03229 1.9184 6.00507 1.87537C7.05997 1.82851 7.3765 1.81676 10.0449 1.81676C12.7174 1.81676 13.0337 1.82851 14.0848 1.87537C15.0616 1.9184 15.589 2.08247 15.9406 2.21921C16.3742 2.37931 16.7689 2.63327 17.0892 2.96536C17.4213 3.28967 17.6753 3.68038 17.8355 4.11412C17.9723 4.46575 18.1364 4.99701 18.1794 5.96995C18.2262 7.02484 18.238 7.34122 18.238 10.0097C18.238 12.6783 18.2262 12.9908 18.1794 14.0457Z"
                    fill="#FBFAF3"
                  />
                  <path
                    d="M10.0371 4.86426C7.20068 4.86426 4.89935 7.16543 4.89935 10.002C4.89935 12.8385 7.20068 15.1397 10.0371 15.1397C12.8736 15.1397 15.1748 12.8385 15.1748 10.002C15.1748 7.16543 12.8736 4.86426 10.0371 4.86426ZM10.0371 13.3347C8.19696 13.3347 6.70436 11.8422 6.70436 10.002C6.70436 8.16172 8.19696 6.66927 10.0371 6.66927C11.8773 6.66927 13.3698 8.16172 13.3698 10.002C13.3698 11.8422 11.8773 13.3347 10.0371 13.3347Z"
                    fill="#FBFAF3"
                  />
                  <path
                    d="M16.5775 4.66109C16.5775 5.32345 16.0405 5.86051 15.378 5.86051C14.7156 5.86051 14.1785 5.32345 14.1785 4.66109C14.1785 3.99858 14.7156 3.46167 15.378 3.46167C16.0405 3.46167 16.5775 3.99858 16.5775 4.66109Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_133">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </li>
            <li>
              <svg
                width="22"
                height="19"
                viewBox="0 0 22 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.7447 3.25223C21.6155 3.04218 21.3792 2.92312 21.1333 2.94445L20.0442 3.03933L21.0852 0.940821C21.2092 0.690885 21.1602 0.389758 20.9634 0.19195C20.7666 -0.00585837 20.4658 -0.0562809 20.2153 0.0664053L17.4601 1.41574C15.7579 0.517093 13.6312 0.783837 12.1678 2.11688C10.9465 3.22941 10.3046 4.94032 10.4243 6.64649C7.23216 6.32656 4.53016 4.49944 2.93243 1.54721C2.82642 1.35137 2.62768 1.22326 2.40555 1.20752C2.183 1.19204 1.9686 1.29066 1.8361 1.4697C0.845144 2.80841 0.775611 4.64393 1.55247 6.154C1.33832 6.09991 1.11044 6.02671 0.857728 5.94229C0.641236 5.86989 0.402561 5.91627 0.228813 6.06438C0.055064 6.21249 -0.0284615 6.44075 0.00869417 6.66603C0.316092 8.5297 1.40286 9.96201 3.11962 10.8098C2.89608 10.8877 2.66799 10.9509 2.43605 10.9992C2.20561 11.0472 2.01902 11.2158 1.948 11.4403C1.87697 11.6646 1.93251 11.9099 2.09333 12.0818C3.32962 13.4033 5.11548 14.0537 6.38398 14.3657C4.94169 15.4952 3.38478 15.6842 1.12242 15.6065C0.860544 15.5986 0.619267 15.7461 0.509165 15.9835C0.399106 16.2209 0.441807 16.5012 0.617688 16.6951C1.56078 17.7346 4.99676 18.9068 8.60875 18.9947C8.75162 18.9981 8.89734 19 9.04613 19C11.5822 19 14.934 18.4563 17.3398 16.0505C19.1607 14.2296 20.2997 12.1333 20.725 9.82008C21.0685 7.95176 20.8514 6.45564 20.7471 5.73659C20.7394 5.68373 20.7312 5.62764 20.7246 5.57858L21.7433 3.93665C21.8732 3.7272 21.8738 3.46229 21.7447 3.25223ZM19.4579 5.9236C19.6512 7.25557 20.2392 11.3088 16.4187 15.1294C14.1979 17.3501 10.9632 17.7489 8.64041 17.6925C6.65844 17.6443 4.88564 17.2652 3.60076 16.8329C4.12243 16.7689 4.58733 16.6702 5.02616 16.5338C6.23591 16.1578 7.25793 15.4812 8.2424 14.4045C8.40651 14.2251 8.45693 13.9692 8.37328 13.7409C8.28962 13.5126 8.08572 13.3499 7.84452 13.319C7.22346 13.2394 5.35731 12.9252 3.88781 11.9116C4.31128 11.7384 4.7197 11.5216 5.10968 11.263C5.32361 11.121 5.43427 10.8667 5.39212 10.6134C5.35002 10.3602 5.16313 10.1552 4.91477 10.0901C3.71201 9.77478 2.26043 9.0692 1.59107 7.49412C2.01851 7.56903 2.48328 7.58716 2.97897 7.47603C3.20873 7.42459 3.39284 7.2531 3.46041 7.02752C3.52803 6.80194 3.46865 6.55742 3.30509 6.38807C2.47223 5.52543 2.16078 4.28227 2.42799 3.21849C3.30309 4.49744 4.41174 5.5738 5.68195 6.3696C7.30686 7.38765 9.20337 7.95027 11.1666 7.99647C11.3663 8.00069 11.558 7.9135 11.6852 7.75873C11.8123 7.60401 11.8612 7.39938 11.8177 7.20387C11.4799 5.68544 11.9617 4.06672 13.045 3.07989C14.1687 2.0563 15.8293 1.90102 17.0834 2.70254C17.2748 2.82492 17.5164 2.83862 17.7206 2.73863L19.0661 2.07964L18.3618 3.49936C18.2572 3.7103 18.2746 3.96131 18.4073 4.15579C18.5399 4.35027 18.7669 4.45824 19.0018 4.43763L19.9507 4.355L19.5136 5.05951C19.3669 5.29597 19.3973 5.50576 19.4579 5.9236Z"
                  fill="#FBFAF3"
                />
              </svg>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h2>Download Our App</h2>

          <img
            src="/images/apple.png"
            alt="apple"
          />

          <img
            src="/images/image.png"
            alt="play"
          />
          
        </div>
      </div>
      <div className={styles.bottomFooter}>
        <div className={styles.row}>
            <ul>
                <li>© 2023 STREAM X. All Rights Reserved.</li>
                <li>Terms Of Use </li>
                <li>Privacy Policy</li>
                <li>FAQ</li>
            </ul>
        </div>
        <div className={styles.row}>
        <svg
          width="93"
          height="15"
          viewBox="0 0 93 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.07106 10.3989H0C0 10.9423 0.0998825 11.4823 0.299648 12.0189C0.499412 12.5554 0.830056 13.0473 1.29158 13.4944C1.75311 13.9347 2.36963 14.289 3.14114 14.5573C3.91954 14.8187 4.88736 14.9494 6.04464 14.9494C7.42234 14.9494 8.56234 14.7465 9.46476 14.3406C10.3671 13.9278 11.0388 13.3637 11.4796 12.6483C11.9274 11.9329 12.1512 11.1177 12.1512 10.2028C12.1512 9.23287 11.9549 8.45892 11.5623 7.88105C11.1696 7.30325 10.6702 6.86983 10.064 6.58093C9.45789 6.29203 8.82755 6.09939 8.17315 6.00306L6.36496 5.72449C5.79318 5.63505 5.342 5.50775 5.01135 5.34264C4.6876 5.17072 4.52571 4.93339 4.52571 4.63065C4.52571 4.32798 4.6497 4.07007 4.89769 3.85677C5.14568 3.63665 5.54523 3.52656 6.0963 3.52656C6.51648 3.52656 6.8609 3.59885 7.12955 3.7433C7.3982 3.88086 7.59796 4.05285 7.72888 4.2592C7.85973 4.45873 7.92863 4.65819 7.93551 4.85766H11.8619C11.8619 4.12164 11.6553 3.41309 11.242 2.73208C10.8356 2.05101 10.2053 1.49381 9.3511 1.06042C8.50382 0.620155 7.41546 0.400024 6.08597 0.400024C4.91492 0.400024 3.88854 0.578879 3.00682 0.936595C2.13198 1.29431 1.45002 1.81712 0.960937 2.50501C0.47186 3.18609 0.227319 4.01154 0.227319 4.98152C0.227319 5.84829 0.39953 6.56716 0.743953 7.13814C1.08837 7.70913 1.56368 8.15625 2.16986 8.47957C2.77605 8.8029 3.46489 9.03334 4.23639 9.17091L5.94131 9.4702C6.57504 9.58023 7.06072 9.71779 7.3982 9.8829C7.74263 10.0411 7.91488 10.3025 7.91488 10.6671C7.91488 10.8598 7.85629 11.042 7.73919 11.214C7.62897 11.3791 7.44303 11.5133 7.18119 11.6164C6.92636 11.7196 6.57847 11.7712 6.13763 11.7712C5.80008 11.7712 5.50389 11.7334 5.24901 11.6577C4.99412 11.5752 4.7806 11.4685 4.60837 11.3379C4.43618 11.2003 4.30529 11.0523 4.21572 10.8941C4.1262 10.729 4.07796 10.5639 4.07106 10.3989ZM16.3773 14.712H20.7171V4.0941H24.3025V0.627034H12.7919V4.0941H16.3773V14.712ZM35.1208 1.23584C34.2942 0.829973 33.2644 0.627034 32.0314 0.627034H25.5631V14.712H29.8098V10.017H30.8947L33.1576 14.712H37.921L35.1518 9.4702C35.4205 9.34634 35.7477 9.11934 36.1334 8.78913C36.526 8.45892 36.8705 8.01861 37.1667 7.46829C37.4698 6.91803 37.6213 6.25416 37.6213 5.47683C37.6213 4.50686 37.4113 3.6573 36.991 2.9281C36.5709 2.1989 35.9474 1.63483 35.1208 1.23584ZM31.37 7.12782H29.8098V3.73297H31.37C31.8247 3.73297 32.2346 3.87742 32.5997 4.16632C32.9647 4.4484 33.1472 4.87831 33.1472 5.45618C33.1472 6.02716 32.9682 6.45025 32.61 6.72538C32.2587 6.99369 31.8454 7.12782 31.37 7.12782ZM43.64 14.712H39.3468V0.627034H43.64V0.623598H59.654V4.05049H43.64V3.95997H43.6351V6.1785H43.64V5.9544H59.654V9.3813H43.64V9.19156H43.6351V11.3791H43.64V11.2851H59.654V14.712H49.4005H43.64ZM62.4405 14.712H66.7284L67.3587 12.0499H71.2133L71.8227 14.712H76.4515L72.2151 0.627034H66.7181L62.4405 14.712ZM69.2083 4.20763H69.4254L70.5209 9.0058H68.0717L69.2083 4.20763ZM77.64 14.712H81.4733V6.85957H81.6796L84.0978 12.0395H86.371L88.7683 6.85957H88.9645V14.712H92.8598V0.627034H88.3652L85.3375 6.91114H85.1933L82.1757 0.627034H77.64V14.712Z"
            fill="white"
          />
        </svg>

        <svg
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.6602 0.0065918L18.6418 13.4143L26.6407 27H17.4168L13.2499 19.1887H12.9337L8.80583 27H0.0559459L7.67998 13.4143L0.0168457 0.0065918H9.67482L13.3881 8.17385H13.7238L17.4364 0.0065918H26.6602Z"
            fill="#FF4949"
          />
        </svg>
        </div>
      </div>
    </footer>
  );
}