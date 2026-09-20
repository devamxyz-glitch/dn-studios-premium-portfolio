import Link from "next/link";

export default function NotFound(){
  return (
    <main style={{minHeight:"100vh",display:"grid",placeItems:"center",padding:"30px",background:"#070707",color:"#f5f0e7"}}>
      <div style={{maxWidth:"620px"}}>
        <span style={{fontSize:"9px",letterSpacing:".22em",color:"#d8b56d"}}>DN STUDIOS / 404</span>
        <h1 style={{fontSize:"clamp(70px,12vw,150px)",lineHeight:".8",letterSpacing:"-.07em",margin:"20px 0"}}>NOT FOUND.</h1>
        <p style={{fontSize:"13px",lineHeight:"1.8",color:"rgba(245,240,231,.5)"}}>The page you requested is not available.</p>
        <Link href="/" style={{display:"inline-block",marginTop:"20px",padding:"14px 18px",background:"#d8b56d",color:"#090909",textDecoration:"none",fontSize:"8px",letterSpacing:".18em"}}>RETURN TO DN STUDIOS</Link>
      </div>
    </main>
  );
}