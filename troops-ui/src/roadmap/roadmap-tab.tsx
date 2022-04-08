import React from "react"
import { Chrono } from "react-chrono";
import items from "./timelineModel";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Check } from 'tabler-icons-react';
import { Loader, Circle } from 'tabler-icons-react';
const Roadmap = () => {
  return (
    // <Chrono items={items} />
    <>
      {/* <div style={{ width:"50%", margin: "0 auto",}}>
        <div style={{border: "1px solid #ffcc00", borderRadius:"5px", padding:"10px", background:"#ffcc00"}}>
        <h3 style={{ textAlign:"center", fontSize:"calc(100% + 0.5vw)"}}>GENESIS</h3>

        <p style={{padding:"10px", margin:"10px"}}><i><b>A small group of Elrond Enthusiasts and Airsoft Players gathered and formed the team behind Elrond Troops. Our aim is to bring value to the ⚡ Elrond Ecosystem while gathering people to form a Blockchain community well linked to the real world.

        </b></i></p>
        </div>
      </div> */}
      <div style={{ width: "50%", margin: "0 auto", }}>
        <div style={{ zIndex: "10000", width: "1%", margin: "0 auto", border: "10px solid #fff", borderRadius: "20px", background: "#808080", boxShadow: "0px 2px #888888" }}>

        </div>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Q1"
          iconStyle={{ background: '#99ff66', color: '#000' }}
          icon={<Check />}
        >
          <h3 className="vertical-timeline-element-title">PROJECT BASE LINE 🎖️ ETROOPS</h3>
          <p>
            Establish the project, first partners and benefits NFTs asset design & Testing on the TestNet & DevNet Establishment of social networks to ensure a proper communication between holders: - Twitter - Discord - Telegram - Website Launch the First Phase of 🎖️ eTroops - 500 eSoldier NFTs When 500 NFTs will be sold 2x IRL Exclusive Aidrops will be granted to 3x Winners. Winners will be drawn from the holders of eTroops at that time.

          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="PRESENT"
          iconStyle={{ background: '#99ff66', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #99ff66' }}
          contentStyle={{ background: '#99ff66', color: '#000' }}
          icon={<Check />}
        >
          <h3 className="vertical-timeline-element-title"> LAUNCH THE SECOND PHASE OF 🎖️ ETROOPS</h3>
          <p>
            500 eSoldier NFTs We will host our First Exclusive Airsoft IRL Event for the holders of at least one eSoldier NFT. When 1000 NFTs will be sold 5x IRL Exclusive Airdrops will be granted to 5x Winners. Winners will be drawn from the holders of the eTroops at that time. First 500 eSoldier NFTs will be also eligible to participate. Physical development of an Airsoft Arena will start to happen, where some holders of eTroops will contribute. This Airsoft Arena will be the main place where our community will be holding Exclusive Events for the holders of at least one eSoldier NFT.
          </p>
        </VerticalTimelineElement> <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Q3"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<Loader />}
        >
          <h3 className="vertical-timeline-element-title">EVENTS FOR 🎖️ ETROOPS HODLERS</h3>
          <p>
            We are going to implement and develop a way for hodlers of an eSoldier NFT to organize local airsoft events and be able to set up the game and connect with everyone before it.
                     </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Q3 - Q4"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<Loader />}
        >
          <h3 className="vertical-timeline-element-title">MARKETING OF 🎖️ ETROOPS</h3>
          <p>
            During this period we will be making Elrond Troops present on all social media platform with high level media content. Attract new passionate people about the world of Airsoft in our project. Social Media expansion and partnerships with Influential People in Airsoft Community.
          </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          iconStyle={{ background: 'gray', color: '#fff' }}
          icon={<Circle />}
        />
      </VerticalTimeline>
      <div style={{ width: "50%", margin: "0 auto", }}>
        <div style={{ width: "1%", margin: "0 auto", border: "10px solid #fff", borderRadius: "20px", background: "#808080", boxShadow: "0px 2px #888888" }}>
        </div>
      </div>
    </>
  )
}

export default Roadmap