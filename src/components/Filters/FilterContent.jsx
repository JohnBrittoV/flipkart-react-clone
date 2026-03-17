
export const FilterContent = ({activeTab}) => {
    return(
        <div className="filter-content">
            
            {/* Brands */}
            {activeTab === "Brand" && (
                <>      
                    <div className="filter-option">
                        <label className="checkbox-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        Apple</label>
                    </div>

                     <div className="filter-option">
                        <label className="checkbox-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        Google</label>
                    </div>

                    <div className="filter-option">
                        <label className="checkbox-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        Motorola</label>
                    </div>

                   <div className="filter-option">
                        <label className="checkbox-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        OnePlus</label>
                    </div>

                    <div className="filter-option">
                        <label className="checkbox-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        OPPO</label>
                    </div>

                     <div className="filter-option">
                        <label className="checkbox-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        POCO</label>
                    </div>

                     <div className="filter-option">
                        <label className="checkbox-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        RealMe</label>
                    </div>

                     <div className="filter-option">
                        <label className="checkbox-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        Samsung</label>
                    </div>

                    <div className="filter-option">
                        <label className="checkbox-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        Tecno</label>
                    </div>

                     <div className="filter-option">
                        <label className="checkbox-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        Vivo</label>
                    </div>

                     <div className="filter-option">
                        <label className="checkbox-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        Xiaomi</label>
                    </div>

                     <div className="filter-option">
                        <label className="checkbox-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        Nothing</label>
                    </div>

                     <div className="filter-option">
                        <label className="checkbox-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        Google</label>
                    </div>
                </>
            )}

            {/* RAM */}
            {activeTab === 'RAM' && (
                <>
                    <p className="ram-title">Higher the RAM, Better the Performance</p>

                    <div className="filter-option">
                        <label className="checkbox-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                       4 GB and Above</label>
                    </div>

                    <div className="filter-option">
                        <label className="checkbox-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                       4 GB and Below</label>
                    </div>
                </>
            )}

            {/* Network Type */}
            {activeTab === "NetworkType" && (
                <>
                    <div className="filter-option">
                        <label className="checkbox-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                       5G</label>
                    </div>

                    <div className="filter-option">
                        <label className="checkbox-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                       4G</label>
                    </div>

                    <div className="filter-option">
                        <label className="checkbox-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                       3G</label>
                    </div>

                   <div className="filter-option">
                        <label className="checkbox-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                       4G VOLTE</label>
                    </div>
                </>
            )}

            {/* Internal Storage */}
            {activeTab === "Storage" &&(
                <>
                    <div className="filter-option">
                        <label className="checkbox-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                       256 GB & Above</label>
                    </div>

                    <div className="filter-option">
                        <label className="checkbox-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                       128 GB</label>
                    </div>
                    
                    <div className="filter-option">
                        <label className="checkbox-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                       64 GB</label>
                    </div>

                    <div className="filter-option">
                        <label className="checkbox-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                       32 GB</label>
                    </div>
                </>
            )}

            {/* Processor */}
            {activeTab === "Processor" && (
                <>
                    <div className="filter-option">
                        <label className="checkbox-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                       Snapdragon</label>
                    </div>

                    <div className="filter-option">
                        <label className="checkbox-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                       Mediatek</label>
                    </div>

                    <div className="filter-option">
                        <label className="checkbox-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                       Exynos</label>
                    </div>

                    <div className="filter-option">
                        <label className="checkbox-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                       Apple</label>
                    </div>

                    <div className="filter-option">
                        <label className="checkbox-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                       Qualcomm</label>
                    </div>
                </>
            )}

            {/* Operating Systems */}
            {activeTab === "OS" && (
                <>
                    <div className="filter-option">
                        <label className="checkbox-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                       Android</label>
                    </div>

                    <div className="filter-option">
                        <label className="checkbox-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      iOS</label>
                    </div>

                    <div className="filter-option">
                        <label className="checkbox-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      Windows</label>
                    </div>
                </>
            )}

            {/* Battery Capacity */}
            {activeTab === 'Battery' && (
                <>
                    <div className="filter-option">
                        <label className="checkbox-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      6000 mAh & above</label>
                    </div>

                    <div className="filter-option">
                        <label className="checkbox-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      5000 - 5999 mAh</label>
                    </div>

                    <div className="filter-option">
                        <label className="checkbox-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      4000 - 4999 mAh</label>
                    </div>

                    <div className="filter-option">
                        <label className="checkbox-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      3000 - 3999 mAh</label>
                    </div>
                </>
            )}

            {/* Price */}
            {activeTab === 'Price' && (
                <>
                    <div className="filter-option">
                        <label className="checkbox-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      Rs.10000 and Below</label>
                    </div>

                    <div className="filter-option">
                        <label className="checkbox-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      Rs. 10000 - Rs. 15000</label>
                    </div>

                    <div className="filter-option">
                        <label className="checkbox-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      Rs.15000 - Rs. 20000</label>
                    </div>

                    <div className="filter-option">
                        <label className="checkbox-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                     Rs.20000 - Rs. 30000</label>
                    </div>

                    <div className="filter-option">
                        <label className="checkbox-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      Rs.30000 and Above</label>
                    </div>
                </>
            )}

            {/* Customer Ratings */}
            { activeTab === 'Rating' && (
                <>

                     <div className="filter-option">
                        <label className="checkbox-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      4★ & above</label>
                    </div>

                    <div className="filter-option">
                        <label className="checkbox-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      3★ & above</label>
                    </div>
                </>
            )}

            {/* Discount */}
            { activeTab === 'Discount' && (
                <>  
                    <div className="filter-option">
                        <label className="checkbox-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      50% & more</label>
                    </div>

                    <div className="filter-option">
                        <label className="checkbox-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      40% & more</label>
                    </div>

                    <div className="filter-option">
                        <label className="checkbox-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      30% & more</label>
                    </div>

                    <div className="filter-option">
                        <label className="checkbox-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      20% & more</label>
                    </div>

                    <div className="filter-option">
                        <label className="checkbox-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      10% & more</label>
                    </div>
                </>
            )}
        
        </div>
    )
}