class Note
{
    title: string;
    description: string;
    id: string; 
    constructor(title, description, id)
    {
        this.description=description;
        this.title=title;
        this.id=id;
    }
}

export default Note;