import { FiHome, FiLogOut } from 'react-icons/fi';
import { FaUsers } from 'react-icons/fa';
import { BiUserCircle } from 'react-icons/bi';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { RiQuestionnaireFill } from 'react-icons/ri';
import { MdOutlineSubject } from 'react-icons/md';
import { ImUserTie } from 'react-icons/im';
import { AiOutlineSetting } from 'react-icons/ai';
import './sidebar.css';

const Sidebar = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className='sidebar'>
                 
                <nav className="mt-6">
                    <ul className="list-none">
                        <li className="my-px flex items-center py-2 px-5  hover:bg-gray-100">
                            <FiHome className="w-5 h-5 mr-3" />
                            <span>Home</span>
                        </li>
                        <li className="my-px flex items-center py-2 px-5  hover:bg-gray-100">
                            <FaUsers className="w-5 h-5 mr-3" />
                            <span>Candidate</span>
                        </li>
                        <li className="my-px flex items-center py-2 px-5  hover:bg-gray-100">
                            <BiUserCircle className="w-5 h-5 mr-3" />
                            <span>Role</span>
                        </li>
                        <li className="my-px flex items-center py-2 px-5  hover:bg-gray-100">
                            <HiOutlineUserGroup className="w-5 h-5 mr-3" />
                            <span>Group</span>
                        </li> <li className="my-px flex items-center py-2 px-5  hover:bg-gray-100">
                            <RiQuestionnaireFill className="w-5 h-5 mr-3" />
                            <span>Question</span>
                        </li> <li className="my-px flex items-center py-2 px-5  hover:bg-gray-100">
                            <MdOutlineSubject className="w-5 h-5 mr-3" />
                            <span>Subject</span>
                        </li>
                        <li className="my-px flex items-center py-2 px-5  hover:bg-gray-100">
                            <ImUserTie className="w-5 h-5 mr-3" />
                            <span>Exam Proctoring</span>
                        </li>
                        <li className="my-px flex items-center py-2 px-5  hover:bg-gray-100">
                            <AiOutlineSetting className="w-5 h-5 mr-3" />
                            <span>Setting</span>
                        </li>
                        <li className="my-px">
                            <button className="flex items-center py-2 px-5  hover:bg-gray-100">
                                <FiLogOut className="w-5 h-5 mr-3" />
                                <span>Logout</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    );
};

export default Sidebar;
