/* eslint-disable @next/next/no-img-element */
'use client';
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import ScrollReveal from 'scrollreveal';

import Image from 'next/image';
import image10 from './assets/fotos/10.jpeg';
import image26 from './assets/fotos/26.jpeg';
import image56 from './assets/fotos/56.jpeg';

export default function Home() {
	useEffect(() => {
		const nav = document.querySelector('#header nav');
		const toggle = document.querySelectorAll('nav .toggle');
		const links = document.querySelectorAll('nav ul li a');

		const header = document.querySelector('#header') as HTMLElement;
		const navHeight = header?.offsetHeight;
		const sections = document.querySelectorAll('main section[id]');

		const changeHeaderWhenScroll = () => {
			if (window.scrollY >= navHeight) {
				header?.classList.add('scroll');
			} else {
				header?.classList.remove('scroll');
			}
		};

		const backToTop = () => {
			const backToTopButton = document.querySelector('.back-to-top');
			if (window.scrollY >= 560) {
				backToTopButton?.classList.add('show');
			} else {
				backToTopButton?.classList.remove('show');
			}
		};

		window.addEventListener('scroll', () => {
			changeHeaderWhenScroll();
			backToTop();
			activateMenuAtCurrentSection();
		});

		const handleClickToggle = () => {
			nav?.classList.toggle('show');
		};

		const handleClickLink = () => {
			nav?.classList.remove('show');
		};

		const activateMenuAtCurrentSection = () => {
			const checkpoint = window.scrollY + (window.innerHeight / 8) * 4;
			for (const section of sections) {
				const sectionTop = section.offsetTop;
				const sectionHeight = section.offsetHeight;
				const sectionId = section.getAttribute('id');

				const checkpointStart = checkpoint >= sectionTop;
				const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

				if (checkpointStart && checkpointEnd) {
					document
						.querySelector('nav ul li a[href*=' + sectionId + ']')
						.classList.add('active');
				} else {
					document
						.querySelector('nav ul li a[href*=' + sectionId + ']')
						.classList.remove('active');
				}
			}
		};

		toggle.forEach(element => {
			element.addEventListener('click', handleClickToggle);
		});

		links.forEach(link => {
			link.addEventListener('click', handleClickLink);
		});

		return () => {
			toggle.forEach(element => {
				element.removeEventListener('click', handleClickToggle);
			});
			links.forEach(link => {
				link.removeEventListener('click', handleClickLink);
			});
		};
	}, []);

	useEffect(() => {
		const scrollReveal = ScrollReveal({
			origin: 'top',
			distance: '30px',
			duration: 700,
			reset: true,
		});

		scrollReveal.reveal(
			`#home .image, #home .text,
			#about .image, #about .text,
			#services header, #services .card,
			#price header, #price .card,
			#testimonials header, #testimonials .testimonials,
			#contact .text, #contact .links,
			footer .brand, footer .social
			`,
			{ interval: 100 }
		);

		// const node = document.querySelector('#cake');
		// const nodeList = document.querySelectorAll('.cookies');
		// const nodeArray = [
		// 	document.querySelector('#pie'),
		// 	document.querySelector('#spoon'),
		// 	document.querySelector('#ice-cream'),
		// ];

		// ScrollReveal().reveal(node);
		// ScrollReveal().reveal(nodeList);
		// ScrollReveal().reveal(nodeArray);
	}, []);

	return (
		<div>
			<header id="header" className="scroll">
				<nav className="container">
					<a className="logo" href="#">
						beauty<span>salon</span>.
					</a>
					<div className="menu">
						<ul className="grid">
							<li>
								<a className="title" href="#home">
									Início
								</a>
							</li>
							<li>
								<a className="title" href="#about">
									Sobre
								</a>
							</li>
							<li>
								<a className="title" href="#services">
									Serviços
								</a>
							</li>
							<li>
								<a className="title" href="#testimonials">
									Depoimentos
								</a>
							</li>
							<li>
								<a className="title" href="#price">
									Planos
								</a>
							</li>
							<li>
								<a className="title" href="#contact">
									Contato
								</a>
							</li>
						</ul>
					</div>
					<div className="toggle icon-menu"></div>
					<div className="toggle icon-close"></div>
				</nav>
			</header>
			<main>
				<section className="section" id="home">
					<div className="container grid">
						<div className="image">
							<img
								src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								alt="Mulher sorrindo pentenado cabelo de outra mulher"
							/>
						</div>
						<div className="text">
							<h2 className="title">Saúde natural para os seus cabelos</h2>
							<p>
								Um salão exclusivo em São Paulo, especializado em tratamentos
								naturais.
							</p>
							<a className="button" href="#">
								Agendar um horário
							</a>
						</div>
					</div>
				</section>
				<div className="divider-1" />

				<section className="section" id="about">
					<div className="container grid">
						<div className="image">
							<img
								src="https://images.unsplash.com/photo-1559599101-f09722fb4948?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								alt="três cabelereiras"
							/>
						</div>
						<div className="text">
							<h2 className="title">Sobre nós</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Necessitatibus deleniti perferendis vel molestiae soluta,
								quaerat beatae dicta ducimus praesentium architecto harum
								dolorum distinctio illo earum assumenda itaque. Omnis, quam
								repellat.
							</p>
							<br />
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
								illum ratione impedit quae eum quis adipisci asperiores, est
								doloribus distinctio excepturi minima eius dolore! Perferendis
								laborum illo aspernatur repellendus ipsum.
							</p>
							<br />
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
								exercitationem, illum sapiente quasi hic iusto odio maiores esse
								quaerat quis necessitatibus at odit, dolores dicta, officia ab
								quos. Provident, quae.
							</p>
						</div>
					</div>
				</section>

				<div className="divider-2" />

				<section className="section" id="services">
					<div className="container grid">
						<header>
							<h2 className="title">Serviços</h2>
							<p className="subtitle">
								Com mais de 10 anos no mercado, o <strong>Beautysalon</strong>
								já conquistou clientes de inúmeros países com seus tratamentos
								exclusivos e totalmente naturais
							</p>
						</header>
						<div className="cards grid">
							<div className="card">
								<i className="icon-woman-hair"></i>
								<h3 className="title">Terapia capilar</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Dignissimos omnis praesentium et odio voluptas error.
								</p>
							</div>
							<div className="card">
								<i className="icon-trim"></i>
								<h3 className="title">Cortes</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Dignissimos omnis praesentium et odio voluptas error.
								</p>
							</div>
							<div className="card">
								<i className="icon-cosmetic"></i>
								<h3 className="title">Tratamento</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Dignissimos omnis praesentium et odio voluptas error.
								</p>
							</div>
						</div>
					</div>
				</section>
				<div className="divider-1" />

				<section className="section" id="testimonials">
					<div className="container">
						<header>
							<h2 className="title">Depoimentos de quem já passou por aqui</h2>
						</header>

						<Swiper
							className="testimonials swiper-container"
							// spaceBetween={50}
							mousewheel={true}
							pagination={{
								clickable: true,
							}}
							breakpoints={{
								767: {
									slidesPerView: 2,
									setWrapperSize: true,
								},
							}}
							modules={[Pagination, Mousewheel, Keyboard]}
							slidesPerView={1}
							keyboard={true}
							onSlideChange={() => console.log('slide change')}
							onSwiper={swiper => console.log(swiper)}
						>
							<SwiperSlide>
								<div className="testimonial">
									<blockquote>
										<p>
											<span>&ldquo;</span>
											Lorem ipsum dolor, sit amet consectetur adipisicing elit.
											Perspiciatis eius maxime maiores iste illum, impedit unde,
											voluptates recusandae deserunt rerum earum!
										</p>
										<cite>
											<Image src={image10} alt="image10" />
											Everson Silva
										</cite>
									</blockquote>
								</div>
							</SwiperSlide>
							<SwiperSlide className="testimonial">
								<blockquote>
									<p>
										<span>&ldquo;</span>
										Lorem ipsum dolor, sit amet consectetur adipisicing elit.
										Perspiciatis eius maxime maiores iste illum, impedit unde,
										voluptates recusandae deserunt rerum earum!
									</p>
									<cite>
										<Image src={image26} alt="image26" />
										Murilo Silva
									</cite>
								</blockquote>
							</SwiperSlide>
							<SwiperSlide className="testimonial">
								<blockquote>
									<p>
										<span>&ldquo;</span>
										Lorem ipsum dolor, sit amet consectetur adipisicing elit.
										Perspiciatis eius maxime maiores iste illum, impedit unde,
										voluptates recusandae deserunt rerum earum!
									</p>
									<cite>
										<Image src={image56} alt="image56" />
										Liliane Almeida
									</cite>
								</blockquote>
							</SwiperSlide>
						</Swiper>
					</div>
				</section>
				<div className="divider-2" />

				<section className="section" id="price">
					<div className="container grid">
						<header>
							<h2 className="title">Planos</h2>
							<p className="subtitle">
								Com mais de 10 anos no mercado, o <strong>Beautysalon</strong>
								já conquistou clientes de inúmeros países com seus tratamentos
								exclusivos e totalmente naturais
							</p>
						</header>
						<div className="cards grid">
							<div className="card">
								<i className="icon-woman-hair"></i>
								<h3 className="title">Plano I</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Dignissimos omnis praesentium et odio voluptas error.
								</p>
							</div>
							<div className="card">
								<i className="icon-trim"></i>
								<h3 className="title">Plano II</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Dignissimos omnis praesentium et odio voluptas error.
								</p>
							</div>
							<div className="card">
								<i className="icon-cosmetic"></i>
								<h3 className="title">Plano III</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Dignissimos omnis praesentium et odio voluptas error.
								</p>
							</div>
						</div>
					</div>
				</section>
				<div className="divider-1" />

				{/* Price - Planos */}
				{/* <section className="section" id="price">
					<div className="container grid">
						<header>
							<h2 className="title">Depoimentos de quem já passou por aqui</h2>
						</header>
						<div className="testimonials">
							<div className="testimonial">
								<blockquote>
									<p>
										<span>&ldquo;</span>
										Lorem ipsum dolor, sit amet consectetur adipisicing elit.
										Perspiciatis eius maxime maiores iste illum, impedit unde,
										voluptates recusandae deserunt rerum earum!
									</p>
									<cite>
										<Image src={image10} alt="image10" />
										Everson Silva
									</cite>
								</blockquote>
							</div>
							<div className="testimonial">
								<blockquote>
									<p>
										<span>&ldquo;</span>
										Lorem ipsum dolor, sit amet consectetur adipisicing elit.
										Perspiciatis eius maxime maiores iste illum, impedit unde,
										voluptates recusandae deserunt rerum earum!
									</p>
									<cite>
										<Image src={image26} alt="image26" />
										Murilo Silva
									</cite>
								</blockquote>
							</div>
							<div className="testimonial">
								<blockquote>
									<p>
										<span>&ldquo;</span>
										Lorem ipsum dolor, sit amet consectetur adipisicing elit.
										Perspiciatis eius maxime maiores iste illum, impedit unde,
										voluptates recusandae deserunt rerum earum!
									</p>
									<cite>
										<Image src={image56} alt="image56" />
										Liliane Almeida
									</cite>
								</blockquote>
							</div>
						</div>
					</div>
				</section> */}
				{/* <section className="section" id="price">
					<div className="container grid">Planos</div>
				</section> */}
				<section className="section" id="contact">
					<div className="container grid">
						<div className="text">
							<h2 className="title">Entre em contato com a gente!</h2>
							<p>
								Entre em contato com a Beautysalon, queremos tirar suas dúvidas,
								ouvir suas críticas e sugestões.
							</p>
							<a
								href="https://api.whatsapp.com/send?phone=+5519999999999&text=App Ginga Brasil"
								target="_blank"
								className="button"
							>
								<i className="icon-whatsapp"></i>
								Entrar em contato
							</a>
						</div>
						<div className="links">
							<ul className="grid">
								<li>
									<i className="icon-phone"></i>
									(19) 99999-9999
								</li>
								<li>
									<i className="icon-map-pin"></i>
									Rua João Pedro Corrêa, 1111
								</li>
								<li>
									<i className="icon-mail"></i>
									everson_gsilva@yahoo.com.br
								</li>
							</ul>
						</div>
					</div>
				</section>
				<div className="divider-1" />
			</main>
			<footer className="section">
				<div className="container grid">
					<div className="brand">
						<a className="logo logo-alt" href="#home">
							beauty<span>saloon</span>.
						</a>
						<p>©2021 Beautysalon.</p>
						<p>Todos os direitos reservados.</p>
					</div>
					<div className="social grid">
						<a target="_blank" href="https://instagram.com">
							<i className="icon-instagram"></i>
						</a>
						<a target="_blank" href="https://facebook.com">
							<i className="icon-facebook"></i>
						</a>
						<a target="_blank" href="https://youtube.com">
							<i className="icon-youtube"></i>
						</a>
					</div>
				</div>
			</footer>
			<a href="#home" className="back-to-top">
				<i className="icon-arrow-up"></i>
			</a>
		</div>
	);
}
