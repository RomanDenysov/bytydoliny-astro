type InstProps = {
	width: number;
	height: number;
	color?: string;
};

const Inst = ({ width = 30, height = 30, color = "#BE996D" }: InstProps) => {
	return (
		<svg
			width={width}
			height={height}
			className="mx-auto z-50"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M8.7876 0.105021C7.1916 0.180271 6.10173 0.435021 5.14885 0.809271C4.16285 1.19365 3.32698 1.70927 2.49535 2.5439C1.66385 3.37852 1.1516 4.2149 0.770102 5.20265C0.400852 6.1574 0.150602 7.24827 0.080102 8.84515C0.00960198 10.442 -0.00602301 10.9554 0.00185199 15.0289C0.00960199 19.1021 0.027602 19.6128 0.104977 21.213C0.181227 22.8086 0.434977 23.8983 0.809352 24.8514C1.19435 25.8375 1.70935 26.673 2.54435 27.5049C3.37923 28.3368 4.21498 28.8478 5.20498 29.2299C6.15898 29.5986 7.2501 29.85 8.84673 29.9199C10.4434 29.9899 10.9572 30.0061 15.0295 29.9983C19.1017 29.9905 19.6145 29.9724 21.2142 29.8965C22.8142 29.8206 23.898 29.565 24.8515 29.1924C25.8376 28.8066 26.6737 28.2924 27.505 27.4573C28.3362 26.622 28.8481 25.785 29.2294 24.7968C29.599 23.8428 29.8501 22.7518 29.9193 21.1563C29.9893 19.5551 30.0059 19.044 29.9981 14.9713C29.9902 10.8984 29.9719 10.3878 29.896 8.78815C29.8201 7.18852 29.566 6.10227 29.1919 5.14852C28.8064 4.1624 28.2919 3.32752 27.4574 2.49502C26.6227 1.66252 25.785 1.15102 24.7972 0.770646C23.8425 0.401271 22.7521 0.149646 21.1555 0.080646C19.5589 0.011646 19.045 -0.00622901 14.9712 0.00177099C10.8975 0.00952099 10.3875 0.027021 8.7876 0.105021ZM8.96285 27.2214C7.50035 27.1578 6.70623 26.9148 6.17698 26.7114C5.47623 26.4414 4.97698 26.115 4.4496 25.5926C3.9221 25.0704 3.59823 24.5694 3.3246 23.8701C3.1191 23.3409 2.8716 22.5476 2.80323 21.0851C2.72885 19.5045 2.71323 19.0299 2.70448 15.0251C2.69573 11.0205 2.7111 10.5464 2.78035 8.96515C2.84285 7.5039 3.08735 6.7089 3.29035 6.1799C3.56035 5.47827 3.8856 4.9799 4.4091 4.4529C4.9326 3.92577 5.4321 3.60115 6.13198 3.32752C6.66073 3.12115 7.45385 2.87577 8.91573 2.80615C10.4976 2.73115 10.9716 2.71615 14.9757 2.7074C18.9799 2.69865 19.4551 2.71365 21.0376 2.7834C22.4988 2.8469 23.2942 3.08902 23.8226 3.2934C24.5236 3.5634 25.0226 3.88765 25.5496 4.41215C26.0767 4.9364 26.4016 5.43415 26.6752 6.13552C26.8819 6.66265 27.1273 7.45552 27.1964 8.9184C27.2716 10.5003 27.2887 10.9746 27.2959 14.9784C27.3031 18.9821 27.289 19.4576 27.2196 21.0384C27.1559 22.5009 26.9134 23.2953 26.7096 23.8251C26.4396 24.5256 26.1142 25.0251 25.5904 25.5519C25.0666 26.0788 24.5677 26.4033 23.8675 26.6769C23.3395 26.883 22.5454 27.129 21.0847 27.1986C19.5027 27.273 19.0287 27.2886 15.0231 27.2974C11.0175 27.3061 10.5447 27.2899 8.96285 27.2214ZM21.1912 6.98302C21.1918 7.33906 21.298 7.68692 21.4963 7.98262C21.6946 8.27831 21.9762 8.50855 22.3053 8.64422C22.6345 8.77989 22.9965 8.81488 23.3456 8.74479C23.6947 8.67469 24.0151 8.50265 24.2664 8.25042C24.5177 7.99819 24.6885 7.67711 24.7573 7.32778C24.8261 6.97845 24.7897 6.61656 24.6528 6.2879C24.5159 5.95923 24.2846 5.67855 23.9882 5.48134C23.6918 5.28414 23.3435 5.17928 22.9875 5.18002C22.5102 5.18101 22.0529 5.37151 21.716 5.70961C21.3792 6.04772 21.1904 6.50576 21.1912 6.98302ZM7.2981 15.015C7.30648 19.269 10.7614 22.7096 15.0144 22.7016C19.2676 22.6935 22.7106 19.239 22.7026 14.985C22.6945 10.731 19.2389 7.2894 14.9851 7.29777C10.7314 7.30615 7.2901 10.7615 7.2981 15.015ZM9.99998 15.0096C9.99803 14.0207 10.2894 13.0535 10.8371 12.2302C11.3849 11.4068 12.1645 10.7644 13.0774 10.3842C13.9903 10.0039 14.9954 9.90293 15.9657 10.0939C16.936 10.2849 17.8278 10.7594 18.5285 11.4572C19.2291 12.1551 19.7071 13.0451 19.9019 14.0146C20.0968 14.9841 19.9998 15.9896 19.6232 16.904C19.2466 17.8184 18.6073 18.6005 17.7861 19.1516C16.965 19.7026 15.9989 19.9978 15.01 19.9998C14.3533 20.0012 13.7029 19.8732 13.0957 19.6231C12.4885 19.3731 11.9366 19.0059 11.4713 18.5425C11.0061 18.0791 10.6367 17.5286 10.3842 16.9224C10.1318 16.3162 10.0012 15.6663 9.99998 15.0096Z"
				fill={color}
			/>
		</svg>
	);
};

export default Inst;
