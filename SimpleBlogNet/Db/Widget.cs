namespace SimpleBlogNet.Db
{
    public partial class Widget
    {
        public int Id { get; set; }
        public string Title { get; set; } = null!;
        public string Content { get; set; } = null!;
    }
}
