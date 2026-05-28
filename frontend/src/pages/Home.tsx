import { useEffect, useState } from "react";
import { getPageBySlug, getProjects } from "../api/wp";
import { Link } from "react-router-dom";
import sampleImage from "../assets/sample.png";
import bg1 from "../assets/bg_1.jpg";
import bg2 from "../assets/bg_2.jpg";
import bg3 from "../assets/bg_3.jpg";
//import { getPage } from "../api/wp";

export default function Home() {
	const [page, setPage] = useState<any>(null);
	const [projects, setProjects] = useState<any[]>([]);
	const acf = page?.acf;
  
	useEffect(() => {
		getPageBySlug("home").then((data) => {
		setPage(data);
		});

	}, []);

	
	useEffect(() => {
		getProjects().then((data) => {
			setProjects(data);
		});
	}, []);
  
	return (
	<>

    <section className="ftco-section">
      	<div className="container">
        	<div className="row d-flex">
          		<div className="col-md-5 order-md-last wrap-about align-items-stretch">
            		<div className="wrap-about-border">
              			<div className="img" style={{ backgroundImage: `url(${acf?.features_section?.left_image})` }}></div>
						<div className="text">
							<h3>{acf?.features_section?.left_title}</h3>
							<p>{acf?.features_section?.left_description_1}</p>
							<p>{acf?.features_section?.left_description_2}</p>
							<p><a href="{acf?.features_section?.button_link}" className="btn btn-primary py-3 px-4">{acf?.features_section?.button_text}</a></p>
						</div>
					</div>
				</div>
				<div className="col-md-7 wrap-about pr-md-4">
					<h2 className="mb-4">{acf?.features_section?.main_title}</h2>
					<p>{acf?.features_section?.main_description}</p>
					<div className="row mt-5">

						{acf?.features_section?.features_list
							?.reduce((rows: any[], item: any, index: number) => {

							if (index % 2 === 0) {
								rows.push(
								acf.features_section.features_list.slice(index, index + 2)
								);
							}

							return rows;

							}, [])
							.map((row: any, rowIndex: number) => (

							<div className="col-lg-6" key={rowIndex}>

								{row.map((item: any, index: number) => (

								<div
									className={`services ${
									item.active_item ? "active" : ""
									} text-center`}
									key={index}
								>

									<div className="icon mt-2 d-flex justify-content-center align-items-center">
									<span className={item.icon_class}></span>
									</div>

									<div className="text media-body">
									<h3>{item.feature_title}</h3>
									<p>{item.feature_description}</p>
									</div>

								</div>

								))}

							</div>

						))}

					</div>
				</div>
			</div>
		</div>
   </section>
	<section className="ftco-intro ftco-no-pb img" style={{ backgroundImage: `url(${acf?.intro_section?.background_image})` }}>
		
    	<div className="container">
    		<div className="row justify-content-center mb-5">
          <div className="col-md-10 text-center heading-section heading-section-white ">
            <h2 className="mb-0">{acf?.intro_section?.title}</h2>
          </div>
        </div>	
    	</div>
    </section>

    <section className="ftco-counter" id="section-counter">
    	<div className="container">
    		<div className="row d-md-flex align-items-center justify-content-center">
    			<div className="wrapper">
    				<div className="row d-md-flex align-items-center">
					{acf?.counter_section?.counter_items?.map((item, index) => (
						<div className="col-md d-flex justify-content-center counter-wrap " key={index}>
							<div className="block-18">
								<div className="icon"><span className={item?.icon_class}></span></div>
							<div className="text">
								<strong className="number" data-number="705">{item?.number}</strong>
								<span>{item?.label}</span>
							</div>
							</div>
						</div>
					))}	
		        
	          		</div>
          		</div>
        	</div>
    	</div>
    </section>

	<section className="ftco-section">
		<div className="container">
			<div className="row justify-content-center mb-5 pb-2">
				<div className="col-md-8 text-center heading-section">
					<h2 className="mb-4">{acf?.services_service.service_section_title}</h2>
            		{acf?.services_service.service_section_content}
				</div>
			</div>
			<div className="row no-gutters">
				{acf?.services_service?.our_services?.map((item, index) => (	
				<div className="col-lg-4 d-flex" key={index}>
					<div className="services-2 noborder-left text-center">
						<div className="icon mt-2 d-flex justify-content-center align-items-center"><span className={item.service_icon}></span></div>
						<div className="text media-body">
							{item.service_title && <h3>{item.service_title}</h3>}
							{item.service_content}
						</div>
					</div>
				</div>
				))}
			</div>
		</div>
	</section>

	<section className="ftco-intro ftco-no-pb img" style={{ backgroundImage: `url(${acf?.request_quote_section?.request_quote_background})` }}>
    	<div className="container">
    		<div className="row justify-content-center">
				{acf?.request_quote_section?.request_quote_title && (
				<div className="col-lg-9 col-md-8 d-flex align-items-center heading-section heading-section-white">
					<h2 className="mb-3 mb-md-0">{acf?.request_quote_section?.request_quote_title}</h2>
				</div>
				)}
				{acf?.request_quote_section?.request_quote_button.url && (
				<div className="col-lg-3 col-md-4">
					<p className="mb-0"><a href={acf?.request_quote_section?.request_quote_button.url} className="btn btn-white py-3 px-4">{acf?.request_quote_section?.request_quote_button?.title}</a></p>
				</div>
				)}
			</div>	
    	</div>
    </section>
	
	{/* Projects Section - START */ } 	 
	<section className="ftco-section ftco-no-pb">
		<div className="container-fluid px-0">
			<div className="row no-gutters justify-content-center mb-5">
				<div className="col-md-7 text-center heading-section ">
					{acf?.recent_projects?.project_section_title && (
						<h2 className="mb-4">{acf?.recent_projects?.project_section_title}</h2>
					)}
					{acf?.recent_projects?.project_section_content}
				</div>
			</div>
			<div className="row no-gutters" >
				{projects.map((project) => {
				return (
				<div className="col-md-3" key={project.id}>
					<div className="project img d-flex justify-content-center align-items-center" style={{
						backgroundImage: `url(${
							project._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
							sampleImage 
						})`,
						}}>
						<div className="overlay"></div>
						<a href={project.link} className="btn-site d-flex align-items-center justify-content-center"><span className="icon-subdirectory_arrow_right"></span></a> 
						<div className="text text-center p-4"> 
							
							<h3><Link
									to={`/project/${project.slug}`}
									dangerouslySetInnerHTML={{
									__html: project.title.rendered,
									}} />
							</h3>
							{project.project_categories?.map((category: any) => (
							<span key={category.id}>{category.name}</span> 
							))}
						</div>
					</div>
				</div>
				); })}	
			</div>
		</div>
	</section>	
	{/* Projects Section - END */ }
    </>
   
  );



}