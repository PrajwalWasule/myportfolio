import React, { useState } from 'react';

const MeetingSchedule = () => {
    const [meetings, setMeetings] = useState([]);
    const [meetingDate, setMeetingDate] = useState('');
    const [meetingTime, setMeetingTime] = useState('');
    const [meetingTitle, setMeetingTitle] = useState('');
    const [meetingDescription, setMeetingDescription] = useState('');

    const handleScheduleMeeting = () => {
        if (meetingDate && meetingTime && meetingTitle && meetingDescription) {
            const newMeeting = {
                date: meetingDate,
                time: meetingTime,
                title: meetingTitle,
                description: meetingDescription,
            };
            setMeetings([...meetings, newMeeting]);
            setMeetingDate('');
            setMeetingTime('');
            setMeetingTitle('');
            setMeetingDescription('');
        } else {
            alert('Please fill out all fields.');
        }
    };

    return (
        <div className="bg-gray-300 min-h-screen">
        <div className="w-full max-w-6xl mx-auto p-8 bg-gray-100"> {/* Grey background added here */}
            {/* Schedule New Meeting */}
            <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-6">Schedule a New Meeting</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-lg font-semibold" htmlFor="meetingTitle">Meeting Title</label>
                        <input
                            type="text"
                            id="meetingTitle"
                            value={meetingTitle}
                            onChange={(e) => setMeetingTitle(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-md"
                            placeholder="Enter meeting title"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-lg font-semibold" htmlFor="meetingDate">Meeting Date</label>
                        <input
                            type="date"
                            id="meetingDate"
                            value={meetingDate}
                            onChange={(e) => setMeetingDate(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-lg font-semibold" htmlFor="meetingTime">Meeting Time</label>
                        <input
                            type="time"
                            id="meetingTime"
                            value={meetingTime}
                            onChange={(e) => setMeetingTime(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-lg font-semibold" htmlFor="meetingDescription">Description</label>
                        <textarea
                            id="meetingDescription"
                            value={meetingDescription}
                            onChange={(e) => setMeetingDescription(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-md"
                            placeholder="Enter meeting description"
                            rows="4"
                        />
                    </div>
                    <button
                        type="button"
                        onClick={handleScheduleMeeting}
                        className="bg-gray-600 text-white px-6 py-3 rounded-md hover:bg-gray-700"
                    >
                        Schedule Meeting
                    </button>

                </form>
            </div>

            {/* Display Scheduled Meetings */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-6">Scheduled Meetings</h2>
                {meetings.length === 0 ? (
                    <p>No meetings scheduled yet.</p>
                ) : (
                    <ul>
                        {meetings.map((meeting, index) => (
                            <li key={index} className="mb-6 p-4 border-b">
                                <h3 className="text-2xl font-semibold">{meeting.title}</h3>
                                <p className="text-lg text-gray-700">Date: {meeting.date}</p>
                                <p className="text-lg text-gray-700">Time: {meeting.time}</p>
                                <p className="text-gray-600">{meeting.description}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
        </div>
    );
};

export default MeetingSchedule;
