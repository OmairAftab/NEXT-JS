
import React from "react";

export default function ComplexDashboard({
    children,
    useranalytics,
    revenue,
    notifications,
    login,
}:{
    
    children: React.ReactNode,
    useranalytics: React.ReactNode,
    revenue: React.ReactNode,
    notifications: React.ReactNode,
    login: React.ReactNode,
}) {

    const isLoggedIn = true; // Replace with your actual login logic

    return  (

        isLoggedIn ? (
        
            <div>
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{useranalytics}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
      </div>
    </div>

        ) :  (

            <h2>Please login to continue</h2>
        )
        
    ) 


}