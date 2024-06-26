import {
    CodeXml,
    Github,
    GlobeIcon,
    Linkedin,
    Mail,
    Twitter
} from 'lucide-react';
import React from 'react';
export type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
    globe: (props: IconProps) => <GlobeIcon {...props} className="h-3 w-3" />,
    source: (props: IconProps) => <CodeXml {...props} className="h-3 w-3" />,
    mail: (props: IconProps) => <Mail {...props} className="h-4 w-4" />,
    linkedin: (props: IconProps) => <Linkedin {...props} className="h-4 w-4" />,
    x: (props: IconProps) => <Twitter {...props} className="h-4 w-4" />,
    github: (props: IconProps) => <Github {...props} className="h-4 w-4" />
};

export const SkillIcons = {
    typescript: () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 256 256"
        >
            <g fill="none">
                <rect width="256" height="256" fill="#007acc" rx="60" />
                <path
                    fill="#fff"
                    d="m56.611 128.849l-.081 10.484h33.32v94.679h23.57v-94.679h33.32v-10.281c0-5.689-.121-10.443-.284-10.565c-.122-.162-20.399-.244-44.983-.203l-44.739.122zm149.956-10.741c6.501 1.626 11.459 4.511 16.01 9.224c2.357 2.52 5.851 7.112 6.136 8.209c.081.325-11.053 7.802-17.798 11.987c-.244.163-1.22-.894-2.317-2.519c-3.291-4.795-6.745-6.868-12.028-7.233c-7.761-.529-12.759 3.535-12.718 10.321c0 1.991.284 3.169 1.097 4.795c1.706 3.535 4.876 5.648 14.832 9.955c18.326 7.884 26.168 13.085 31.045 20.48c5.445 8.249 6.664 21.415 2.966 31.208c-4.063 10.646-14.141 17.879-28.323 20.277c-4.388.772-14.791.65-19.504-.203c-10.281-1.829-20.033-6.908-26.047-13.572c-2.357-2.601-6.949-9.387-6.664-9.875c.121-.162 1.178-.812 2.356-1.503c1.138-.65 5.446-3.129 9.509-5.486l7.355-4.267l1.544 2.276c2.154 3.291 6.867 7.802 9.712 9.305c8.167 4.308 19.383 3.698 24.909-1.259c2.357-2.154 3.332-4.389 3.332-7.68c0-2.967-.366-4.267-1.91-6.502c-1.991-2.844-6.054-5.242-17.595-10.24c-13.206-5.689-18.895-9.224-24.096-14.832c-3.007-3.25-5.852-8.452-7.03-12.8c-.975-3.616-1.219-12.678-.447-16.335c2.722-12.759 12.353-21.658 26.25-24.3c4.511-.853 14.994-.528 19.424.569"
                />
            </g>
        </svg>
    ),
    javascript: () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 256 256"
        >
            <g fill="none">
                <rect width="256" height="256" fill="#f0db4f" rx="60" />
                <path
                    fill="#323330"
                    d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.889-3.092 12.889-15.12v-81.798h24.058v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.579c-17.357-7.388-28.871-16.668-28.871-36.258c0-18.044 13.748-31.792 35.229-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.731 12.029c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.139 14.778 14.608l6.014 2.577c20.449 8.765 31.963 17.699 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574"
                />
            </g>
        </svg>
    ),
    next: () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
        >
            <path
                fill="#918d8d"
                d="M17.664 17.65L10.26 8H8v8h2v-5.054l6.087 7.933a8 8 0 1 1 1.578-1.23M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m2-10V8h2v4z"
            />
        </svg>
    ),
    prisma: () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 32 32"
        >
            <path
                fill="#d2d2d2"
                fill-rule="evenodd"
                d="m25.21 24.21l-12.471 3.718a.525.525 0 0 1-.667-.606l4.456-21.511a.43.43 0 0 1 .809-.094l8.249 17.661a.6.6 0 0 1-.376.832m2.139-.878L17.8 2.883A1.53 1.53 0 0 0 16.491 2a1.51 1.51 0 0 0-1.4.729L4.736 19.648a1.59 1.59 0 0 0 .018 1.7l5.064 7.909a1.63 1.63 0 0 0 1.83.678l14.7-4.383a1.6 1.6 0 0 0 1-2.218Z"
            />
        </svg>
    ),
    nodejs: () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 15 15"
        >
            <path
                fill="#1f7529"
                fill-rule="evenodd"
                d="M14 4.213L7.5.42L1 4.213v6.574l1.006.587l2.057-.832A1.5 1.5 0 0 0 5 9.152V4h1v5.152a2.5 2.5 0 0 1-1.562 2.317l-1.34.542L7.5 14.58l6.5-3.792zM7 6a2 2 0 0 1 2-2h1.167C11.179 4 12 4.82 12 5.833V6h-1v-.167A.833.833 0 0 0 10.167 5H9a1 1 0 0 0 0 2h1a2 2 0 1 1 0 4H9a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h1a1 1 0 1 0 0-2H9a2 2 0 0 1-2-2"
                clip-rule="evenodd"
            />
        </svg>
    ),
    mongodb: () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 15 15"
        >
            <path
                fill="#36d949"
                fill-rule="evenodd"
                d="M7.869.162a.5.5 0 0 0-.738 0l-2.63 2.87a5.5 5.5 0 0 0-.271 7.115L7 13.673V15h1v-1.327l2.77-3.526a5.5 5.5 0 0 0-.27-7.114zM8 3a.5.5 0 0 0-1 0v7.5a.5.5 0 0 0 1 0z"
                clip-rule="evenodd"
            />
        </svg>
    ),
    postgresql: () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
        >
            <path
                fill="#5c85d6"
                d="M16.805 1a9.85 9.85 0 0 0-2.603.37l-.06.018a10.629 10.629 0 0 0-1.615-.151c-1.113-.019-2.07.243-2.84.68c-.76-.256-2.336-.697-3.997-.609c-1.157.061-2.419.402-3.354 1.36c-.933.958-1.426 2.44-1.322 4.457c.028.557.191 1.464.463 2.64c.27 1.175.652 2.55 1.127 3.805c.475 1.256.996 2.384 1.81 3.15c.406.384.965.707 1.624.68c.463-.018.882-.215 1.243-.506c.176.225.364.323.535.414c.215.114.425.192.642.244a4.61 4.61 0 0 0 1.84.091c.267-.043.548-.127.828-.247c.01.302.022.598.035.898c.038.95.063 1.827.357 2.596c.047.126.176.773.687 1.344c.51.572 1.51.928 2.648.692c.803-.167 1.825-.468 2.503-1.404c.67-.926.973-2.254 1.033-4.409c.015-.116.033-.215.052-.308l.16.014h.018c.857.038 1.787-.08 2.564-.43c.688-.31 1.208-.622 1.587-1.177c.095-.137.199-.303.227-.59c.028-.285-.14-.733-.421-.939c-.563-.414-.916-.257-1.295-.18c-.373.08-.753.124-1.136.133c1.093-1.784 1.876-3.68 2.323-5.358c.264-.99.413-1.903.425-2.701c.012-.798-.055-1.505-.548-2.117c-1.541-1.91-3.708-2.438-5.384-2.456c-.052-.001-.104-.002-.156-.001zm-.044.587c1.585-.015 3.611.417 5.065 2.22c.327.405.424.997.413 1.727c-.012.729-.151 1.601-.405 2.557c-.493 1.852-1.425 4.01-2.738 5.948a.724.724 0 0 0 .15.079c.274.11.898.204 2.145-.044c.313-.065.543-.108.781.068a.478.478 0 0 1 .173.39a.635.635 0 0 1-.123.308c-.24.351-.716.684-1.326.958c-.539.244-1.313.371-1.999.379c-.344.003-.661-.023-.93-.104l-.018-.006c-.104.971-.343 2.89-.498 3.765c-.125.706-.343 1.267-.76 1.687c-.416.42-1.004.673-1.796.838c-.981.204-1.696-.016-2.157-.393c-.46-.375-.671-.874-.798-1.18c-.087-.21-.132-.483-.176-.848a18.073 18.073 0 0 1-.097-1.315a45.725 45.725 0 0 1-.028-2.312c-.41.363-.92.605-1.467.696c-.65.107-1.232.002-1.579-.082a2.19 2.19 0 0 1-.49-.185c-.162-.083-.315-.177-.417-.363a.5.5 0 0 1-.054-.35a.559.559 0 0 1 .206-.303c.188-.148.435-.23.808-.306c.68-.135.917-.228 1.061-.339c.123-.095.262-.287.508-.57a1.166 1.166 0 0 1-.003-.037a2.864 2.864 0 0 1-1.257-.328c-.141.144-.865.887-1.748 1.917c-.371.431-.781.678-1.214.696c-.433.018-.824-.194-1.156-.506c-.665-.626-1.195-1.703-1.657-2.92c-.46-1.218-.836-2.574-1.102-3.729c-.268-1.155-.426-2.086-.448-2.535c-.1-1.909.36-3.195 1.15-4.006c.79-.811 1.872-1.118 2.928-1.177c1.894-.106 3.693.535 4.057.673c.701-.462 1.604-.75 2.733-.732a7.185 7.185 0 0 1 1.588.2l.019-.008c.229-.078.462-.144.698-.196a9.362 9.362 0 0 1 1.957-.23zm.143.614h-.137a8.502 8.502 0 0 0-1.61.176a7.048 7.048 0 0 1 2.692 2.062a7.72 7.72 0 0 1 1.07 1.76c.104.242.174.447.213.605c.02.08.034.147.038.217a.392.392 0 0 1-.011.132l-.006.012c.029.803-.176 1.347-.201 2.113c-.019.556.127 1.209.163 1.92c.034.67-.049 1.405-.497 2.127c.038.044.072.088.108.132c1.185-1.81 2.04-3.814 2.495-5.521c.243-.92.373-1.753.384-2.413c.01-.66-.117-1.139-.279-1.338c-1.268-1.573-2.983-1.974-4.422-1.985zm-4.525.235c-1.117.002-1.919.33-2.526.82c-.627.507-1.047 1.2-1.323 1.911a7.898 7.898 0 0 0-.485 2.213l.013-.007c.337-.184.78-.367 1.254-.473c.475-.106.986-.139 1.449.035c.463.175.846.584.985 1.206c.665 2.986-.207 4.096-.529 4.933a8.628 8.628 0 0 0-.312.929c.04-.01.08-.02.121-.024a1.06 1.06 0 0 1 .51.1c.324.13.546.402.666.714c.031.082.054.17.067.26c.014.038.02.077.019.117a49.059 49.059 0 0 0 .012 3.426c.022.494.054.928.095 1.271c.04.342.098.602.135.69c.12.294.297.678.617.939c.32.26.777.434 1.614.26c.726-.151 1.174-.36 1.474-.663c.298-.301.477-.72.591-1.363c.171-.963.515-3.754.556-4.28c-.018-.395.042-.7.172-.932c.135-.238.343-.384.522-.463c.09-.04.174-.066.243-.085a5.487 5.487 0 0 0-.23-.298a4.065 4.065 0 0 1-.629-1.007a7.578 7.578 0 0 0-.243-.443c-.125-.22-.284-.495-.45-.804c-.333-.619-.695-1.369-.883-2.1c-.187-.729-.215-1.484.265-2.017c.426-.473 1.172-.669 2.293-.559c-.033-.096-.053-.176-.109-.304a7.125 7.125 0 0 0-.983-1.617c-.95-1.178-2.487-2.346-4.863-2.384h-.108zm-6.276.047c-.12 0-.24.004-.36.01c-.954.053-1.856.322-2.501.986c-.647.663-1.072 1.751-.98 3.553c.019.34.172 1.296.434 2.43c.262 1.136.634 2.471 1.08 3.65c.446 1.18.988 2.207 1.502 2.693c.259.243.484.341.688.333c.205-.01.451-.124.753-.475a40.03 40.03 0 0 1 1.71-1.877a3.206 3.206 0 0 1-.932-1.307a3.116 3.116 0 0 1-.17-1.58c.097-.678.11-1.312.099-1.812c-.012-.488-.048-.812-.048-1.015v-.028a8.806 8.806 0 0 1 .559-3.095c.264-.682.658-1.375 1.249-1.936c-.58-.185-1.61-.467-2.725-.52a7.4 7.4 0 0 0-.36-.01zm11.714 4.842c-.641.008-1.001.169-1.19.379c-.268.298-.293.82-.127 1.464c.165.644.507 1.365.829 1.963c.16.3.316.57.442.788c.127.22.22.376.276.51c.052.122.11.23.168.331c.248-.509.293-1.008.267-1.529c-.033-.644-.187-1.303-.164-1.97c.025-.78.184-1.289.198-1.892a5.639 5.639 0 0 0-.699-.044m-7.78.105a2.743 2.743 0 0 0-.582.068a4.49 4.49 0 0 0-1.09.412c-.115.06-.226.13-.33.209l-.02.018c.006.134.033.459.045.936c.01.523-.002 1.19-.106 1.91c-.226 1.568.946 2.866 2.324 2.868c.08-.322.213-.648.345-.992c.384-1.003 1.139-1.734.503-4.589c-.104-.467-.31-.656-.594-.763a1.431 1.431 0 0 0-.495-.077m7.48.187h.048c.062.002.12.009.17.02a.396.396 0 0 1 .13.051a.153.153 0 0 1 .071.1v.008a.215.215 0 0 1-.034.124a.614.614 0 0 1-.104.137a.646.646 0 0 1-.364.195a.57.57 0 0 1-.388-.095a.569.569 0 0 1-.123-.108a.235.235 0 0 1-.06-.116a.151.151 0 0 1 .04-.118a.361.361 0 0 1 .111-.082a1.256 1.256 0 0 1 .504-.118zm-7.388.154c.05 0 .103.005.157.012c.144.02.273.057.371.112c.048.025.09.057.126.097a.214.214 0 0 1 .042.073a.195.195 0 0 1 .009.083a.274.274 0 0 1-.071.141a.608.608 0 0 1-.135.12a.619.619 0 0 1-.424.103a.694.694 0 0 1-.396-.209a.652.652 0 0 1-.112-.15a.25.25 0 0 1-.039-.162c.014-.1.099-.15.18-.18a.842.842 0 0 1 .29-.036zm8.56 6.732h-.003c-.139.05-.253.07-.35.11a.423.423 0 0 0-.225.197c-.06.105-.11.292-.095.61a.49.49 0 0 0 .14.064c.161.048.432.08.735.075c.602-.007 1.344-.143 1.738-.321c.323-.146.623-.336.891-.564c-1.317.264-2.06.194-2.517.011a1.247 1.247 0 0 1-.314-.183zm-7.588.086h-.02c-.05.004-.123.02-.263.172c-.33.358-.444.582-.716.792c-.27.21-.623.321-1.327.461c-.223.044-.35.093-.436.132c.028.022.025.028.066.049c.103.055.236.103.342.13c.303.073.8.159 1.319.073c.518-.086 1.058-.327 1.518-.953c.08-.108.088-.268.023-.44c-.067-.17-.211-.318-.313-.36a.632.632 0 0 0-.193-.054z"
            />
        </svg>
    ),
    graphql: () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 32 32"
        >
            <path
                fill="#e10098"
                d="M4.781 22.746L16.232 2.914l1.028.593L5.81 23.34z"
            />
            <path fill="#e10098" d="M4.545 21.162h22.902v1.187H4.545z" />
            <path
                fill="#e10098"
                d="m4.999 21.828l.593-1.028l11.455 6.614l-.594 1.028zM14.95 4.59l.594-1.027l11.455 6.614l-.594 1.028z"
            />
            <path
                fill="#e10098"
                d="M5.002 10.174L16.456 3.56l.594 1.028l-11.455 6.614z"
            />
            <path
                fill="#e10098"
                d="m14.743 3.508l1.028-.594l11.45 19.833l-1.027.593zM5.454 9.386h1.187v13.228H5.454z"
            />
            <path fill="#e10098" d="M25.36 9.386h1.187v13.228H25.36z" />
            <path
                fill="#e10098"
                d="m15.734 27.042l9.962-5.752l.519.898l-9.963 5.752z"
            />
            <path
                fill="#e10098"
                d="M28.12 23a2.5 2.5 0 1 1-.915-3.411A2.5 2.5 0 0 1 28.12 23M8.2 11.5a2.5 2.5 0 1 1-.915-3.411A2.5 2.5 0 0 1 8.2 11.5M3.88 23a2.5 2.5 0 1 1 3.411.915A2.5 2.5 0 0 1 3.88 23M23.8 11.5a2.5 2.5 0 1 1 3.411.915A2.5 2.5 0 0 1 23.8 11.5M16 30a2.5 2.5 0 1 1 2.5-2.5A2.493 2.493 0 0 1 16 30m0-23.009a2.5 2.5 0 1 1 2.5-2.5a2.493 2.493 0 0 1-2.5 2.5"
            />
        </svg>
    ),
    docker: () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 32 32"
        >
            <path
                fill="#0096e6"
                d="M16.54 12.663h2.86v2.924h1.446a6.3 6.3 0 0 0 1.988-.333a5 5 0 0 0 .966-.436a3.6 3.6 0 0 1-.67-1.849a3.9 3.9 0 0 1 .7-2.753l.3-.348l.358.288a4.56 4.56 0 0 1 1.795 2.892a4.38 4.38 0 0 1 3.319.309l.393.226l-.207.4a4.14 4.14 0 0 1-4.157 1.983c-2.48 6.168-7.871 9.088-14.409 9.088c-3.378 0-6.476-1.263-8.241-4.259l-.029-.049l-.252-.519a8.3 8.3 0 0 1-.659-4.208l.04-.433h2.445v-2.923h2.861V9.8h5.721V6.942h3.432z"
            />
            <path
                fill="#fff"
                d="M12.006 24.567a6.02 6.02 0 0 1-3.14-3.089a10.3 10.3 0 0 1-2.264.343q-.5.028-1.045.028q-.632 0-1.331-.037a9.05 9.05 0 0 0 7 2.769q.392 0 .78-.014M7.08 13.346h.2v2.067h-.2Zm-.376 0h.2v2.067H6.7v-2.067Zm-.376 0h.2v2.067h-.2Zm-.376 0h.2v2.067h-.2Zm-.376 0h.2v2.067h-.2Zm-.368 0h.2v2.067h-.2zM5 13.14h2.482v2.479H5Zm2.859-2.861h2.48v2.479H7.863Zm2.077.207h.2v2.066h-.2Zm-.376 0h.2v2.066h-.2Zm-.376 0h.2v2.066h-.2zm-.376 0h.2v2.066h-.2Zm-.376 0h.2v2.066h-.2Zm-.368 0h.2v2.066h-.2Zm-.207 2.653h2.48v2.48H7.863V13.14Zm2.077.207h.2v2.067h-.2Zm-.376 0h.2v2.067h-.2Zm-.376 0h.2v2.067h-.2zm-.376 0h.2v2.067h-.2Zm-.376 0h.2v2.067h-.2Zm-.368 0h.2v2.067h-.2Zm2.654-.207H13.2v2.48h-2.48V13.14Zm2.076.207H13v2.067h-.2Zm-.376 0h.2v2.067h-.2Zm-.376 0h.2v2.067h-.2Zm-.376 0h.2v2.067h-.2Zm-.376 0h.2v2.067h-.2Zm-.368 0h.2v2.067h-.2Zm-.206-3.067H13.2v2.479h-2.48v-2.479Zm2.076.207H13v2.066h-.2Zm-.376 0h.2v2.066h-.2Zm-.376 0h.2v2.066h-.2Zm-.376 0h.2v2.066h-.2Zm-.376 0h.2v2.066h-.2Zm-.368 0h.2v2.066h-.2Zm2.654 2.653h2.479v2.48h-2.48V13.14Zm2.076.207h.2v2.067h-.2Zm-.376 0h.2v2.067h-.2Zm-.376 0h.2v2.067h-.2Zm-.376 0h.2v2.067h-.2Zm-.376 0h.2v2.067h-.2Zm-.368 0h.192v2.067h-.2v-2.067Zm-.206-3.067h2.479v2.479h-2.48zm2.076.207h.2v2.066h-.2Zm-.376 0h.2v2.066h-.2Zm-.376 0h.2v2.066h-.2Zm-.376 0h.2v2.066h-.2Zm-.376 0h.2v2.066h-.2Zm-.368 0h.192v2.066h-.2v-2.066Zm-.206-3.067h2.479V9.9h-2.48zm2.076.206h.2v2.066h-.2Zm-.376 0h.2v2.066h-.2Zm-.376 0h.2v2.066h-.2Zm-.376 0h.2v2.066h-.2Zm-.376 0h.2v2.066h-.2Zm-.368 0h.192v2.066h-.2V7.625Zm2.654 5.514h2.479v2.48h-2.48V13.14Zm2.076.207h.195v2.067h-.2v-2.067Zm-.376 0h.206v2.067h-.206Zm-.376 0h.2v2.067h-.2Zm-.376 0h.2v2.067h-.2Zm-.376 0h.2v2.067h-.205v-2.067Zm-.368 0h.2v2.067h-.194v-2.067Zm-6.442 6.292a.684.684 0 1 1-.684.684a.684.684 0 0 1 .684-.684m0 .194a.5.5 0 0 1 .177.033a.2.2 0 1 0 .275.269a.49.49 0 1 1-.453-.3Z"
            />
        </svg>
    ),
    react: () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 32 32"
        >
            <circle cx="16" cy="15.974" r="2.5" fill="#00d8ff" />
            <path
                fill="#00d8ff"
                d="M16 21.706a28.4 28.4 0 0 1-8.88-1.2a11.3 11.3 0 0 1-3.657-1.958A3.54 3.54 0 0 1 2 15.974c0-1.653 1.816-3.273 4.858-4.333A28.8 28.8 0 0 1 16 10.293a28.7 28.7 0 0 1 9.022 1.324a11.4 11.4 0 0 1 3.538 1.866A3.4 3.4 0 0 1 30 15.974c0 1.718-2.03 3.459-5.3 4.541a28.8 28.8 0 0 1-8.7 1.191m0-10.217a28 28 0 0 0-8.749 1.282c-2.8.977-4.055 2.313-4.055 3.2c0 .928 1.349 2.387 4.311 3.4A27.2 27.2 0 0 0 16 20.51a27.6 27.6 0 0 0 8.325-1.13C27.4 18.361 28.8 16.9 28.8 15.974a2.33 2.33 0 0 0-1.01-1.573a10.2 10.2 0 0 0-3.161-1.654A27.5 27.5 0 0 0 16 11.489"
            />
            <path
                fill="#00d8ff"
                d="M10.32 28.443a2.64 2.64 0 0 1-1.336-.328c-1.432-.826-1.928-3.208-1.327-6.373a28.8 28.8 0 0 1 3.4-8.593a28.7 28.7 0 0 1 5.653-7.154a11.4 11.4 0 0 1 3.384-2.133a3.4 3.4 0 0 1 2.878 0c1.489.858 1.982 3.486 1.287 6.859a28.8 28.8 0 0 1-3.316 8.133a28.4 28.4 0 0 1-5.476 7.093a11.3 11.3 0 0 1-3.523 2.189a4.9 4.9 0 0 1-1.624.307m1.773-14.7a28 28 0 0 0-3.26 8.219c-.553 2.915-.022 4.668.75 5.114c.8.463 2.742.024 5.1-2.036a27.2 27.2 0 0 0 5.227-6.79a27.6 27.6 0 0 0 3.181-7.776c.654-3.175.089-5.119-.713-5.581a2.33 2.33 0 0 0-1.868.089A10.2 10.2 0 0 0 17.5 6.9a27.5 27.5 0 0 0-5.4 6.849Z"
            />
            <path
                fill="#00d8ff"
                d="M21.677 28.456c-1.355 0-3.076-.82-4.868-2.361a28.8 28.8 0 0 1-5.747-7.237a28.7 28.7 0 0 1-3.374-8.471a11.4 11.4 0 0 1-.158-4A3.4 3.4 0 0 1 8.964 3.9c1.487-.861 4.01.024 6.585 2.31a28.8 28.8 0 0 1 5.39 6.934a28.4 28.4 0 0 1 3.41 8.287a11.3 11.3 0 0 1 .137 4.146a3.54 3.54 0 0 1-1.494 2.555a2.6 2.6 0 0 1-1.315.324m-9.58-10.2a28 28 0 0 0 5.492 6.929c2.249 1.935 4.033 2.351 4.8 1.9c.8-.465 1.39-2.363.782-5.434A27.2 27.2 0 0 0 19.9 13.74a27.6 27.6 0 0 0-5.145-6.64c-2.424-2.152-4.39-2.633-5.191-2.169a2.33 2.33 0 0 0-.855 1.662a10.2 10.2 0 0 0 .153 3.565a27.5 27.5 0 0 0 3.236 8.1Z"
            />
        </svg>
    ),
    tailwind: () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 32 32"
        >
            <path
                fill="#44a8b3"
                d="M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1m-7 8.4q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1"
            />
        </svg>
    ),
    git: () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 32 32"
        >
            <path
                fill="#dd4c35"
                d="M29.472 14.753L17.247 2.528a1.8 1.8 0 0 0-2.55 0l-2.539 2.539l3.22 3.22a2.141 2.141 0 0 1 2.712 2.73l3.1 3.1a2.143 2.143 0 1 1-1.285 1.21l-2.895-2.895v7.617a2.141 2.141 0 1 1-1.764-.062V12.3a2.146 2.146 0 0 1-1.165-2.814l-3.17-3.172L2.528 14.7a1.8 1.8 0 0 0 0 2.551l12.225 12.221a1.8 1.8 0 0 0 2.55 0L29.472 17.3a1.8 1.8 0 0 0 0-2.551"
            />
            <path
                fill="#fff"
                d="m12.158 5.067l3.22 3.22a2.141 2.141 0 0 1 2.712 2.73l3.1 3.1a2.143 2.143 0 1 1-1.285 1.21l-2.895-2.895v7.617a2.141 2.141 0 1 1-1.764-.062V12.3a2.146 2.146 0 0 1-1.165-2.814l-3.17-3.172"
            />
        </svg>
    ),
    html: () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 32 32"
        >
            <path
                fill="#e44f26"
                d="M5.902 27.201L3.655 2h24.69l-2.25 25.197L15.985 30z"
            />
            <path fill="#f1662a" d="m16 27.858l8.17-2.265l1.922-21.532H16z" />
            <path
                fill="#ebebeb"
                d="M16 13.407h-4.09l-.282-3.165H16V7.151H8.25l.074.83l.759 8.517H16zm0 8.027l-.014.004l-3.442-.929l-.22-2.465H9.221l.433 4.852l6.332 1.758l.014-.004z"
            />
            <path
                fill="#fff"
                d="M15.989 13.407v3.091h3.806l-.358 4.009l-3.448.93v3.216l6.337-1.757l.046-.522l.726-8.137l.076-.83zm0-6.256v3.091h7.466l.062-.694l.141-1.567l.074-.83z"
            />
        </svg>
    ),
    css: () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 32 32"
        >
            <path
                fill="#1572b6"
                d="M5.902 27.201L3.656 2h24.688l-2.249 25.197L15.985 30z"
            />
            <path fill="#33a9dc" d="m16 27.858l8.17-2.265l1.922-21.532H16z" />
            <path
                fill="#fff"
                d="M16 13.191h4.09l.282-3.165H16V6.935h7.75l-.074.829l-.759 8.518H16z"
            />
            <path
                fill="#ebebeb"
                d="m16.019 21.218l-.014.004l-3.442-.93l-.22-2.465H9.24l.433 4.853l6.331 1.758l.015-.004z"
            />
            <path
                fill="#fff"
                d="m19.827 16.151l-.372 4.139l-3.447.93v3.216l6.336-1.756l.047-.522l.537-6.007z"
            />
            <path
                fill="#ebebeb"
                d="M16.011 6.935v3.091H8.545l-.062-.695l-.141-1.567l-.074-.829zM16 13.191v3.091h-3.399l-.062-.695l-.14-1.567l-.074-.829z"
            />
        </svg>
    ),
    redux: () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
        >
            <g
                fill="none"
                stroke="#7A4EBB"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
            >
                <path d="M16.54 7c-.805-2.365-2.536-4-4.54-4c-2.774 0-5.023 2.632-5.023 6.496c0 1.956 1.582 4.727 2.512 6" />
                <path d="M4.711 11.979C3.055 13.856 2.497 16.164 3.5 17.89c1.387 2.39 5.138 2.831 8.501.9c1.703-.979 2.875-3.362 3.516-4.798" />
                <path d="M15.014 19.99c2.511 0 4.523-.438 5.487-2.1c1.387-2.39-.215-5.893-3.579-7.824c-1.702-.979-4.357-1.235-5.927-1.07" />
                <path d="M10.493 9.862c.48.276 1.095.112 1.372-.366a1 1 0 0 0-.367-1.365a1.007 1.007 0 0 0-1.373.366a1 1 0 0 0 .368 1.365M8.5 15.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0m6-1.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0" />
            </g>
        </svg>
    ),
    credit: () => (
        <svg
            className="mx-2"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 512 512"
        >
            <path
                fill="gray"
                d="M256 48a208 208 0 1 1 0 416a208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512a256 256 0 1 0 0 512m-56.6-199.4c-31.2-31.2-31.2-81.9 0-113.1s81.9-31.2 113.1 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-50-50-131-50-181 0s-50 131 0 181s131 50 181 0c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0c-31.2 31.2-81.9 31.2-113.1 0z"
            ></path>
        </svg>
    )
};
