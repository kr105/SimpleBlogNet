namespace SimpleBlogNet.Db
{
    public partial class BlogPost
    {
        public int Id { get; set; }
        public string Title { get; set; } = null!;
        public string Intro { get; set; } = null!;
        public string Content { get; set; } = null!;
        public string? IntroImage { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}
