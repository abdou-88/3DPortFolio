import { FC } from "react";


import "../assets/OverLay.css";
import Menu from "./Menu";


interface LeftProps {
  active: boolean;
  headerText?: string;
}

const OverLay: FC<LeftProps> = ({ active, headerText }) => {

  return (
    <>
      <div>

      
       
      </div>


      
        <div className={active ? "section-header" : "section-header-nobefore"}>
          <div className="text-wrapper">
            <h1>{headerText}</h1>
            <h3>This is a Boxfolio project designed and developed by A.Yousfi</h3>
          </div>
        </div>
        
   

    </>




  );
};

export default OverLay;
