
import React, { useState } from 'react'

const TabBar = (
    { Tabs, floatingActonButton }: {
        Tabs: TabData[],
        floatingActonButton?: React.ReactElement
    }
) => {
    if (Tabs.length == 0) {
        throw "noTabsProvided"
    }
    const [SelectedTab, setSelectedTab] = useState(0);

    return (
        <div style={{
            color: "black",
            padding: "20px"
        }}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}
            >
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                }}
                >
                    {Tabs.map((e, i) => {
                        const selected = SelectedTab === i
                        //@ts-ignore
                        return <div key={e.Name}
                            style={{
                                borderRadius: "10px 10px 0px 0px",
                                padding: "15px 70px 15px 70px",
                                border: "1px",
                                borderStyle: selected ? "solid" : 'none',
                                borderColor: selected ? "#f4ce14" : "#DFDFDF",
                                backgroundColor: selected ? "white" : "#E0E0E0"
                            }}
                            onClick={(b) => {
                                setSelectedTab(i)
                            }}>
                            {e.Name}
                        </div>
                    })}
                </div>
                {floatingActonButton}
            </div>
            <div key={1} style={{
                border: "1.44px solid #f4ce14"
            }}>
                {Tabs[SelectedTab].children.map((e,i)=>React.cloneElement(e,{
                    key:i
                }))}

            </div>
        </div>
    )
}

export default TabBar

interface TabData {
    Name: String,
    children: React.ReactElement[]
}
