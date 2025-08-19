<><form onSubmit={handleSubmit}>
    <input type="text" name="name" placeholder="ชื่อของคุณ" required />
    <input type="email" name="email" placeholder="อีเมลของคุณ" required />
    <textarea name="message" placeholder="ข้อความ" required />
    <button type="submit">ส่งข้อความ</button>
</form><div className="contact-info">
        <h3>ติดต่อฉัน</h3>
        <p>Email: your-email@example.com</p>
        <div className="social-links">
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
    </div></>
    const handleSubmit = (e) => {e.preventDefault(); // ป้องกันการรีโหลด
};