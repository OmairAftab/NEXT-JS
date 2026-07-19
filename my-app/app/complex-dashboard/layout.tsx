
import React from "react";

export default function ComplexDashboard({
    children,
    useranalytics,
    revenue,
    notifications,
}:{
    
    children: React.ReactNode,
    useranalytics: React.ReactNode,
    revenue: React.ReactNode,
    notifications: React.ReactNode,
}) {

    return (
        
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
        
    )


}