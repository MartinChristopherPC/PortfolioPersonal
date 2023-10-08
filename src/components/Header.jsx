export const Header = () => {
	return (
		<header class='text-gray-400 bg-gray-900 body-font'>
			<div class='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
				<a class='flex title-font font-medium items-center text-white mb-4 md:mb-0'>
					<svg
						version='1.0'
						xmlns='http://www.w3.org/2000/svg'
						width='50'
						height='50'
						viewBox='0 0 501.000000 498.000000'
						preserveAspectRatio='xMidYMid meet'>
						<g
							transform='translate(0.000000,498.000000) scale(0.100000,-0.100000)'
							fill='#000000'
							stroke='none'>
							<path
								d='M2486 4533 c-33 -189 -85 -439 -105 -503 -11 -35 -19 -66 -17 -68 2
-2 32 33 67 77 35 45 69 81 75 81 6 0 39 -36 73 -81 35 -44 64 -79 66 -77 2 2
-9 53 -25 113 -16 61 -47 209 -70 329 -22 121 -42 221 -44 223 -2 2 -11 -40
-20 -94z'
							/>
							<path
								d='M3027 4425 c3 -22 6 -98 6 -170 0 -105 -4 -142 -21 -195 -12 -36 -22
-72 -22 -81 0 -14 47 -85 136 -208 16 -23 18 -23 24 -5 4 10 10 66 14 124 6
92 4 117 -18 205 -28 113 -63 221 -101 310 -23 55 -25 56 -18 20z'
							/>
							<path
								d='M1941 4338 c-71 -185 -94 -286 -93 -408 1 -58 5 -124 9 -148 l8 -43
80 116 c44 63 79 121 78 128 -1 7 -11 45 -23 86 -19 64 -21 92 -18 227 1 85 3
154 3 154 0 0 -20 -51 -44 -112z'
							/>
							<path
								d='M2243 4104 c-172 -195 -227 -264 -308 -385 -67 -100 -190 -329 -220
-411 -11 -31 -24 -48 -34 -48 -26 0 -153 244 -201 385 -32 95 -39 110 -35 70
9 -71 72 -342 106 -457 28 -95 36 -148 22 -148 -4 0 -27 19 -52 43 -46 44 -46
36 -1 -23 78 -102 246 -363 269 -420 16 -37 63 -112 111 -175 102 -135 213
-302 208 -315 -2 -6 -30 16 -63 48 -33 31 -100 85 -150 119 -106 73 -123 87
-165 147 -18 24 -68 72 -111 106 -65 50 -224 185 -276 234 -14 13 -61 162
-103 326 -30 115 -38 205 -20 212 5 2 -17 44 -50 94 -32 49 -95 157 -140 240
-101 184 -261 456 -266 451 -2 -2 17 -50 42 -108 49 -109 213 -598 238 -709
20 -82 82 -647 73 -656 -10 -10 -71 34 -165 119 -45 42 -134 109 -197 151 -63
42 -136 98 -164 125 -45 44 -174 228 -232 330 -36 64 -33 41 5 -42 31 -68 139
-334 230 -567 43 -110 110 -200 291 -389 61 -64 132 -142 159 -174 27 -32 66
-69 86 -82 82 -52 214 -167 266 -231 74 -93 169 -282 151 -301 -7 -6 -63 32
-116 81 l-34 31 19 -33 c41 -73 117 -142 271 -247 87 -59 171 -120 186 -134
40 -36 72 -103 96 -200 12 -46 41 -131 66 -189 71 -166 71 -166 67 -51 -3 68
0 99 7 99 6 0 16 -12 22 -27 22 -58 42 -93 73 -129 l33 -38 -5 57 c-5 64 5 72
33 25 27 -47 96 -119 106 -112 5 3 6 16 3 29 -16 62 38 19 81 -65 l18 -35 15
43 c15 47 26 46 39 -6 l8 -34 43 67 c44 69 62 76 62 22 l0 -31 44 43 c24 24
52 59 62 77 28 51 42 43 36 -18 l-4 -53 30 29 c17 16 43 57 58 92 15 35 31 64
36 64 9 0 13 -59 9 -135 -2 -35 1 -47 8 -40 18 18 97 218 121 306 49 181 55
189 295 350 76 52 155 110 175 130 33 33 106 129 97 129 -2 0 -32 -22 -67 -49
-35 -28 -67 -48 -72 -45 -11 7 37 129 75 192 58 98 121 166 232 253 121 94
145 118 340 325 195 208 265 302 310 421 64 168 181 454 219 537 20 43 36 83
36 90 0 6 -31 -39 -68 -99 -148 -239 -181 -275 -387 -413 -66 -44 -137 -98
-157 -119 -45 -48 -152 -133 -167 -133 -14 0 -14 20 -1 129 6 47 19 169 31
271 11 102 27 214 34 250 20 93 195 618 244 729 22 52 40 96 38 97 -4 5 -191
-314 -266 -454 -39 -72 -100 -175 -135 -229 -36 -54 -61 -99 -56 -101 30 -11
1 -174 -75 -418 l-35 -111 -97 -84 c-53 -46 -137 -116 -185 -155 -49 -40 -105
-94 -125 -122 -24 -35 -67 -73 -140 -123 -57 -40 -128 -95 -156 -121 -80 -75
-79 -75 -67 -44 12 33 93 153 184 275 112 147 114 151 134 211 11 31 46 94 79
141 33 46 75 109 94 139 18 30 57 86 86 124 29 37 53 71 53 74 0 4 -22 -15
-48 -41 -26 -26 -51 -47 -55 -47 -14 0 -6 42 32 177 43 154 86 342 95 418 5
42 1 34 -27 -51 -27 -82 -160 -359 -186 -386 -20 -22 -35 -4 -79 97 -78 176
-200 378 -316 520 -58 72 -303 350 -320 364 -25 21 -6 -37 123 -382 26 -71 60
-136 94 -186 115 -163 214 -353 247 -475 42 -149 14 -310 -83 -483 -39 -68
-60 -80 -56 -32 4 58 0 67 -45 123 -63 76 -82 119 -96 211 -14 95 -75 286
-118 370 -30 60 -173 268 -191 280 -6 3 -45 -43 -87 -102 -122 -172 -202 -359
-229 -540 -16 -107 -19 -114 -91 -209 -46 -60 -54 -78 -54 -113 0 -122 -122
96 -150 269 -31 189 32 363 256 700 52 79 76 131 142 310 78 211 97 270 88
270 -3 0 -67 -70 -143 -156z m-1203 -1448 l85 -63 28 -108 c15 -59 25 -110 22
-113 -8 -8 -33 18 -89 92 -46 62 -146 232 -146 250 0 13 19 3 100 -58z m3030
51 c0 -2 -23 -46 -51 -97 -72 -132 -207 -295 -187 -224 4 11 14 51 23 89 10
39 23 82 29 97 16 39 186 162 186 135z m-2773 -255 c59 -89 138 -278 120 -289
-28 -17 -120 130 -151 242 -10 33 -19 68 -22 78 -10 34 21 16 53 -31z m2473
39 c0 -22 -45 -151 -70 -201 -33 -66 -109 -154 -110 -128 0 38 85 234 133 305
21 31 47 44 47 24z m-1555 -868 c15 -48 58 -285 69 -376 l6 -48 -26 30 c-14
17 -93 90 -175 162 -142 124 -194 176 -110 110 30 -24 40 -28 44 -17 4 11 1
13 -10 9 -12 -5 -15 -2 -10 11 4 10 1 19 -7 22 -14 5 -11 50 6 70 4 6 6 18 2
27 -3 8 0 18 6 22 6 4 8 16 5 26 -6 19 -3 20 31 13 21 -4 47 -15 58 -26 11
-10 32 -21 46 -25 14 -3 31 -11 39 -17 15 -11 14 -9 -5 69 -10 39 16 -12 31
-62z m605 36 c-15 -50 -13 -63 4 -47 8 7 11 17 8 22 -3 5 -1 6 5 3 12 -8 83
11 83 22 0 5 10 8 23 8 17 0 29 -14 52 -61 31 -65 36 -87 20 -98 -5 -4 -6 -10
-2 -14 4 -4 17 1 29 12 13 10 10 4 -6 -14 -29 -31 -61 -47 -37 -18 8 10 9 16
1 21 -6 3 -7 11 -4 17 4 6 3 8 -3 5 -5 -3 -8 -20 -7 -36 2 -28 -10 -41 -106
-126 -60 -53 -120 -109 -134 -126 -14 -17 -26 -27 -26 -22 0 29 53 338 65 383
19 66 36 112 41 107 2 -2 -1 -19 -6 -38z m177 25 c-3 -3 -12 -4 -19 -1 -8 3
-5 6 6 6 11 1 17 -2 13 -5z'
							/>
							<path
								d='M3000 1539 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z'
							/>
							<path
								d='M2131 3552 c-52 -78 -80 -138 -81 -175 0 -27 36 -108 70 -157 9 -14
23 -43 31 -65 l13 -40 7 46 c4 25 19 75 34 110 15 35 34 83 43 106 l16 42 -41
83 c-23 46 -43 90 -45 98 -3 9 -21 -10 -47 -48z'
							/>
							<path
								d='M2792 3508 c-24 -49 -42 -97 -39 -106 3 -10 24 -60 46 -112 22 -52
41 -107 41 -122 0 -39 12 -35 36 15 12 23 38 75 59 115 l37 73 -16 42 c-20 52
-97 180 -111 183 -5 1 -30 -38 -53 -88z'
							/>
							<path
								d='M858 1995 c23 -33 82 -113 131 -177 58 -77 91 -129 95 -153 9 -48 2
-54 -37 -32 -31 18 -31 18 9 -25 22 -24 66 -78 98 -121 69 -91 139 -157 198
-185 27 -12 85 -24 158 -32 189 -19 270 -49 354 -129 l49 -46 -41 78 c-75 142
-137 198 -319 291 -115 59 -159 99 -232 205 -54 81 -62 88 -161 146 -130 75
-250 156 -303 204 l-41 36 42 -60z'
							/>
							<path
								d='M4150 2015 c-32 -34 -143 -109 -287 -194 l-122 -71 -61 -95 c-67
-103 -95 -126 -255 -210 -102 -53 -134 -75 -188 -131 -36 -37 -127 -178 -127
-198 0 -5 21 11 48 36 70 65 155 96 321 114 90 10 151 23 179 36 59 28 153
117 209 197 26 36 65 85 87 109 40 43 40 43 9 25 -17 -9 -35 -15 -38 -11 -16
15 21 94 78 169 151 198 218 300 147 224z'
							/>
							<path
								d='M2752 628 c-22 -40 -48 -82 -57 -93 -15 -19 -16 -18 -13 24 l4 44
-51 -57 c-27 -31 -53 -56 -57 -56 -5 0 -8 17 -8 38 l-1 37 -22 -37 c-24 -42
-33 -46 -40 -20 -4 16 -5 16 -6 0 -2 -28 -14 -21 -39 20 l-23 37 5 -37 c7 -52
-8 -48 -66 15 l-49 52 5 -37 c2 -21 1 -38 -4 -38 -5 0 -30 36 -56 80 -25 44
-48 80 -50 80 -4 0 32 -100 59 -160 8 -19 62 -81 119 -137 l103 -103 110 109
c72 70 115 120 122 142 6 19 22 64 36 102 14 37 24 67 22 67 -2 0 -21 -33 -43
-72z'
							/>
						</g>
					</svg>
					<span class='ml-3 text-xl'>MartinPC</span>
				</a>
				<nav class='md:ml-auto flex flex-wrap items-center text-base justify-center'>
					<a class='mr-5 hover:text-white cursor-pointer'>Inicio</a>
					<a class='mr-5 hover:text-white cursor-pointer'>Sobre Mi</a>
					<a class='mr-5 hover:text-white cursor-pointer'>Habilidades</a>
					<a class='mr-5 hover:text-white cursor-pointer'>Proyectos</a>
					<a class='mr-5 hover:text-white cursor-pointer'>Contacto</a>
				</nav>
			</div>
		</header>
	);
};
