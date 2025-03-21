import React, { useState, useEffect } from 'react';
import { FiHardDrive, FiDownload, FiTrash2, FiDatabase, FiAlertCircle } from 'react-icons/fi';

const Storage = () => {
    // This should come from the backendpart
    const [storageData, setStorageData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Simulate fetching storage data
    useEffect(() => {
        const fetchStorageData = async () => {
            try {
                setLoading(true);
                // Simulate API call delay
                await new Promise(resolve => setTimeout(resolve, 1000));
                //--make changes here 
                // This is where you'd make your actual API call
               
                // Simulated data - replace this with actual API data
                
                setStorageData({
                    total: 100,
                    used: 45.5,
                    available: 54.5,
                    categories: [
                        { name: 'Audiobooks', size: 30.5, color: 'bg-blue-500' },
                        { name: 'Downloads', size: 10.2, color: 'bg-green-500' },
                        { name: 'Cache', size: 4.8, color: 'bg-purple-500' }
                    ]
                });
            } catch (err) {
                setError('Failed to load storage data');
                console.error('Error fetching storage data:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchStorageData();
    }, []);

    // Loading state
    if (loading) {
        return (
            <div className="w-full h-full p-8 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
                    <p className="text-slate-200">Loading storage information...</p>
                </div>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className="w-full h-full p-8 flex items-center justify-center">
                <div className="text-center bg-red-500/10 rounded-2xl p-8 border border-red-500/20">
                    <FiAlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                    <p className="text-slate-200 mb-2">{error}</p>
                    <p className="text-slate-400 text-sm">Please try again later</p>
                </div>
            </div>
        );
    }

    // No data state
    if (!storageData) {
        return (
            <div className="w-full h-full p-8 flex items-center justify-center">
                <div className="text-center bg-blue-500/10 rounded-2xl p-8 border border-blue-500/20">
                    <FiDatabase className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                    <p className="text-slate-200 mb-2">No storage data available</p>
                    <p className="text-slate-400 text-sm">Connect your device to view storage information</p>
                </div>
            </div>
        );
    }

    const usedPercentage = (storageData.used / storageData.total) * 100;

    return (
        <div className="w-full h-full p-8 space-y-8">
            {/* Storage Overview */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-6">
                    Storage Overview
                </h2>
                
                {/* Storage Bar */}
                <div className="mb-8">
                    <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                            className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-500"
                            style={{ width: `${usedPercentage}%` }}
                        />
                    </div>
                    <div className="mt-2 flex justify-between text-sm text-slate-200 font-medium">
                        <span>${storageData.used}GB used</span>
                        <span>${storageData.available}GB free</span>
                    </div>
                </div>

                {/* Storage Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {storageData.categories.map((category, index) => (
                        <div key={index} className="p-4 rounded-xl bg-white/5 border border-white/10">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-slate-200 font-medium">{category.name}</span>
                                <span className="text-slate-300">{category.size}GB</span>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div 
                                    className={`h-full ${category.color}`}
                                    style={{ width: `${(category.size / storageData.total) * 100}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <button className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 
                    transition-all duration-300 flex items-center space-x-3 group">
                    <FiDatabase className="text-2xl text-blue-500 group-hover:scale-110 transition-transform" />
                    <span className="text-slate-200 font-medium">Analyze Storage</span>
                </button>
                <button className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 
                    transition-all duration-300 flex items-center space-x-3 group">
                    <FiDownload className="text-2xl text-blue-500 group-hover:scale-110 transition-transform" />
                    <span className="text-slate-200 font-medium">Download Manager</span>
                </button>
                <button className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 
                    transition-all duration-300 flex items-center space-x-3 group">
                    <FiTrash2 className="text-2xl text-blue-500 group-hover:scale-110 transition-transform" />
                    <span className="text-slate-200 font-medium">Clear Cache</span>
                </button>
                <button className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 
                    transition-all duration-300 flex items-center space-x-3 group">
                    <FiHardDrive className="text-2xl text-blue-500 group-hover:scale-110 transition-transform" />
                    <span className="text-slate-200 font-medium">Storage Settings</span>
                </button>
            </div>

            {/* Storage Tips */}
            <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/20">
                <p className="text-sm text-slate-200">
                    Tip: Regular cleanup of cached files can help maintain optimal app performance.
                </p>
            </div>
        </div>
    );
};

export default Storage;