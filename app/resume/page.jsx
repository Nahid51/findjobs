import withAuth from "@/redirects/withAuth";

const Resume = (props) => {
    return (
        <div>
            Update and create your resume.
        </div>
    );
};

export default withAuth(Resume);