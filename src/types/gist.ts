export interface GistFile {
    filename: string
    raw_url: string
    language: string | null
    content: string
}
 
export interface Gist {
    id: string
    description: string | null
    updated_at: string
    html_url: string
    files: { [key: string]: GistFile}
}