const tabs = [
    "Brand",
    "RAM",
    "NetworkType",
    "Storage",
    "Processor",
    "OS",
    "Battery",
    "Price",
    "Rating",
    "Discount"
]

export const FilterTab = ({activeTab, setActiveTab}) => {
    return(
        <div className="filter-tabs">
            {tabs.map(tab => (
                <div
                    key={tab}
                    className={`filter-tab ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab)}>
                    {tab}
                </div>
            ))}
        </div>
    )
}