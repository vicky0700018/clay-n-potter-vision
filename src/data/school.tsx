import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import classroom from '@/assets/preschool-banner.jpg';
const assets = import.meta.glob<string>('../assets/preschool/scene-*.jpg', { eager: true, query: '?url', import: 'default' });
const scenes = Object.keys(assets).sort().map(key => assets[key] || '');
// Semantic placement order preserves existing page composition without using reference crops.
export const photos = [scenes[3],scenes[3],scenes[4],scenes[11],scenes[7],scenes[11],scenes[2],scenes[8],scenes[1],scenes[5],scenes[1],scenes[6],scenes[2],scenes[9],scenes[0],scenes[5],scenes[4],scenes[10],scenes[7],scenes[7],scenes[0],scenes[6],scenes[8],scenes[3]];
export const heroImage = classroom;
export function migrateReferenceImages(saved:SchoolData):SchoolData {
 const result={...saved};
 for(const key of ['programs','activities','gallery','facilities'] as const){
  result[key]=saved[key].map((item,i)=>({...item,image:item.image?.includes('/__l5e/assets-v1/')||item.image?.includes('classroom-hero') ? initialData[key].find(original=>original.id===item.id)?.image || photos[i%photos.length] : item.image}));
 }
 return result;
}
export type Item = { id: string; name: string; description: string; image?: string | undefined; category?: string; age?: string; timing?: string; status: string; rating?: string };
export type Enquiry = { id: string; parent: string; child: string; age: string; phone: string; email: string; program: string; date: string; message: string; status: string };
export type Settings = { business: string; heading: string; description: string; cta: string; phone: string; email: string; address: string; hours: string; footer: string; instagram: string; facebook: string };
export type SchoolData = { programs: Item[]; activities: Item[]; gallery: Item[]; facilities: Item[]; testimonials: Item[]; enquiries: Enquiry[]; admissions: Enquiry[]; settings: Settings };
export type ContentKey = 'programs' | 'activities' | 'gallery' | 'facilities' | 'testimonials';
export const initialData: SchoolData = {
 settings: { business: 'Clay N Potter Day Care & Play School', heading: 'Where Little Minds Grow with Love, Learning & Joy', description: 'Clay N Potter Day Care & Play School provides a safe, nurturing and engaging environment where children can learn, explore, create and grow with confidence.', cta: 'Explore Our Programs', phone: '094250 24617', email: 'support@daycare&playschool.com', address: 'DK4/261, Danish Kunj Kolar Rd, Danish Kunj, Kolar Rd, Bhopal, Madhya Pradesh 462039', hours: 'Monday–Saturday: 9:00 AM–6:00 PM (demo hours — please call to confirm)', footer: 'A happy childhood. A beautiful beginning.', instagram: '', facebook: '' },
 programs: [
 ['Play School','Little steps. Big discoveries. A joyful introduction to learning, friendship and the world around us.','2–4 years',14],
 ['Early Learning','Curious minds discover numbers, language and everyday wonders through purposeful play.','3–5 years',8],
 ['Day Care','A caring second home with a gentle rhythm of play, learning, meals and rest.','1.5–6 years',13],
 ['Activity-Based Learning','Hands-on experiences that make every discovery feel like a little adventure.','2–6 years',11],
 ['Creative Learning','Room to imagine, make a little mess and create something entirely their own.','2–6 years',10],
 ['Fun & Games','Movement, laughter and teamwork that build happy, healthy little learners.','2–6 years',2],
 ].map(([name,description,age,image],i) => ({id:`p${i}`,name:String(name),description:String(description),age:String(age),image:photos[Number(image)],timing:'Please enquire for current timings',status:'Enabled'})),
 activities: ['Art & Craft','Storytelling','Music & Movement','Indoor Games','Outdoor Play','Drawing & Coloring','Rhymes','Puzzle & Problem Solving','Sensory Activities','Celebration Days'].map((name,i) => ({id:`a${i}`,name,description:['A world of colour, textures and little masterpieces.','Wonderful stories that spark imagination and language.','Finding rhythm, expression and joy in every little movement.','Learning to share, take turns and play together.','Fresh air, active bodies and everyday adventures.'][i%5] ?? 'A happy discovery through play.',image:photos[[10,14,16,13,1,8,15,9,12,19][i] ?? 0],category:i===9?'Events':i===4?'Play':'Learning',status:'Enabled'})),
 gallery: photos.map((image,i)=>({id:`g${i}`,image,name:['Little outdoor adventures','Happy playtime','Moving & growing','Friends together','Celebrating little moments','A smile to remember','Learning through play','Our little learners','My first masterpiece','Curiosity at work','Creative little hands','A colourful discovery','Learning together','Playtime possibilities','Growing as a group','Quiet learning moments','Together is better','Snacktime smiles','Celebration of friendship','Colours of celebration','Our school family','Creative discoveries','A happy classroom','Outdoor explorers'][i] ?? 'School memory',description:'AI-created preschool scene — illustrative, not an actual school photograph.',category:['Play','Play','Activities','Events','Events','Classroom','Play','Classroom','Learning','Learning','Activities','Learning','Activities','Play','Classroom','Learning','Classroom','Activities','Events','Events','Events','Learning','Classroom','Play'][i] ?? 'Learning',status:'Enabled'})),
 facilities: ['Bright Classrooms','Indoor Play Area','Outdoor Play Area','Learning Corners','Activity Spaces','Safe & Child-Friendly Environment','Rest Area','Creative Zone'].map((name,i)=>({id:`f${i}`,name,description:['Welcoming spaces for everyday discovery.','Thoughtfully arranged for little hands and growing minds.','Space to move, explore and make friends.','A gentle environment where every child belongs.'][i%4] ?? 'A welcoming place to grow.',image:scenes[[8,9,3,0,6,11,10,1][i] ?? 8],status:'Enabled'})),
 testimonials: ['Priya S.','Ankit M.','Neha R.','Rohit K.','Shalini P.','Aditi V.','Manish D.','Kavita J.'].map((name,i)=>({id:`t${i}`,name,description:['Clay N Potter has created such a warm and welcoming environment for our child. We have seen a wonderful change in confidence, communication and social interaction.','The little things mean so much — a warm welcome, a patient teacher and a child who comes home full of happy stories.','We love the balance of creative learning and play. Our little one feels comfortable, cared for and excited about each new day.','A lovely, nurturing place for children to make their first friends and discover the joy of learning.'][i%4] ?? 'A wonderful demo school experience.',rating:'5',status:'Approved'})),
 enquiries: ['Meera Sharma','Rahul Verma','Pooja Singh','Sahil Jain','Ananya Gupta'].map((parent,i)=>({id:`E-100${i}`,parent,child:['Aarav','Anaya','Vihaan','Ishita','Kabir'][i] ?? 'Child',age:String(i%3+2),phone:'9000000000',email:'demo@example.com',program:['Play School','Day Care','Early Learning'][i%3] ?? 'Play School',date:'2026-10-16',message:'Demo enquiry: we would like to visit the school.',status:['New','Contacted','Scheduled','Completed','New'][i] ?? 'New'})),
 admissions: ['Meera Sharma','Rahul Verma','Pooja Singh'].map((parent,i)=>({id:`APP-100${i}`,parent,child:['Aarav','Anaya','Vihaan'][i] ?? 'Child',age:String(i+2),phone:'9000000000',email:'demo@example.com',program:['Play School','Day Care','Early Learning'][i] ?? 'Play School',date:'2026-10-16',message:'Demo application',status:['New','Under Review','Approved'][i] ?? 'New'})),
};
export const STORAGE_KEY='clay-n-potter-demo-v1';
export function validDemoLogin(email:string,password:string){return email.trim().toLowerCase()==='admin@claynpotter.com' && password==='Admin@123';}
export const enquiryStatuses=['New','Contacted','Scheduled','Completed'];
export const admissionStatuses=['New','Under Review','Approved','Rejected'];
export function visibleItems(items:Item[]){return items.filter(item=>item.status==='Enabled'||item.status==='Approved');}
const Context=createContext<{data:SchoolData;setData:(update:SchoolData|((current:SchoolData)=>SchoolData))=>void;ready:boolean}|null>(null);
export function SchoolProvider({children}:{children:ReactNode}){
 const [data,setData]=useState(initialData); const [ready,setReady]=useState(false);
 useEffect(()=>{try{const saved=localStorage.getItem(STORAGE_KEY);if(saved){const parsed=JSON.parse(saved);if(parsed.settings&&Array.isArray(parsed.programs)&&Array.isArray(parsed.gallery))setData(migrateReferenceImages({...initialData,...parsed}));}}catch{/* retain demo defaults */}setReady(true);},[]);
 useEffect(()=>{if(ready){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(data));}catch{/* storage may be unavailable */}}},[data,ready]);
 return <Context.Provider value={{data,setData,ready}}>{children}</Context.Provider>;
}
export function useSchool(){const context=useContext(Context);if(!context)throw new Error('SchoolProvider is required');return context;}
