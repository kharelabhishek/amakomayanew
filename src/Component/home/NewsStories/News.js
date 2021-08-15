// import React from 'react'
// import './News.css'
// import Titlesection from '../../resuable component/titlesection/Titlesection'
// import NewsContent from './NewsContent'

// export default function News() {
//     return (
//         <div className="background-css">
//             <div className="container">
//             <div className="row news-stories">
//                 <Titlesection title="News and Stories" links="/news-and-stories" />
//                 {NewsContent.map((item)=>{
//                     return(
//                         <div key={item.id} className="mt-3 col-lg-4 col-md-4 col-sm-4 mb-4">
//                             <div className="card">
//                             <img src={item.image} className="card-img-top img-fluid" alt="..." /> 
//                                 <div className="card-body news-stories-heading">
//                                     <h5 className="card-title">{item.title}</h5>
//                                     <p className="card-text">{item.description}</p>
//                                     <a className="more" href="/1">Read More</a>
//                                 </div>
//                             </div>
//                         </div>
//                     )
//                 })}
                
//             </div>
//         </div>
//         </div>
//     )
// }
