"use client"

import { useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { StickyNote, Plus, Edit2, Trash2, Save, X } from 'lucide-react';
import { AuthModal } from '@/components/auth/auth-modal';

interface AssessmentNotesProps {
  assessmentId: string;
}

export function AssessmentNotes({ assessmentId }: AssessmentNotesProps) {
  const { isAuthenticated, userNotes, addNote, updateNote, deleteNote } = useAuth();
  const [isAdding, setIsAdding] = useState(false);
  const [newNoteContent, setNewNoteContent] = useState('');
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [editContent, setEditContent] = useState('');
  const [authModalOpen, setAuthModalOpen] = useState(false);

  const notes = userNotes.filter(n => n.assessmentId === assessmentId);

  const handleAddNote = () => {
    if (!isAuthenticated) {
      setAuthModalOpen(true);
      return;
    }
    setIsAdding(true);
  };

  const handleSaveNew = () => {
    if (newNoteContent.trim()) {
      addNote(assessmentId, newNoteContent);
      setNewNoteContent('');
      setIsAdding(false);
    }
  };

  const handleStartEdit = (noteId: string, content: string) => {
    setEditingNoteId(noteId);
    setEditContent(content);
  };

  const handleSaveEdit = () => {
    if (editingNoteId && editContent.trim()) {
      updateNote(editingNoteId, editContent);
      setEditingNoteId(null);
      setEditContent('');
    }
  };

  const handleCancelEdit = () => {
    setEditingNoteId(null);
    setEditContent('');
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (!isAuthenticated) {
    return (
      <>
        <Card className="p-6">
          <div className="text-center py-8">
            <StickyNote className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-lg font-semibold mb-2">Personal Notes</h3>
            <p className="text-muted-foreground mb-4">
              Sign in to add private notes to this assessment
            </p>
            <Button onClick={() => setAuthModalOpen(true)}>
              Sign In to Add Notes
            </Button>
          </div>
        </Card>
        <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />
      </>
    );
  }

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <StickyNote className="h-5 w-5 text-primary" />
          Your Notes ({notes.length})
        </h3>
        {!isAdding && (
          <Button size="sm" onClick={handleAddNote}>
            <Plus className="h-4 w-4 mr-2" />
            Add Note
          </Button>
        )}
      </div>

      <div className="space-y-4">
        {/* Add new note form */}
        {isAdding && (
          <Card className="p-4 border-2 border-primary">
            <Textarea
              placeholder="Write your note here..."
              value={newNoteContent}
              onChange={(e) => setNewNoteContent(e.target.value)}
              rows={4}
              className="mb-3"
              autoFocus
            />
            <div className="flex gap-2">
              <Button size="sm" onClick={handleSaveNew}>
                <Save className="h-4 w-4 mr-2" />
                Save Note
              </Button>
              <Button size="sm" variant="outline" onClick={() => {
                setIsAdding(false);
                setNewNoteContent('');
              }}>
                <X className="h-4 w-4 mr-2" />
                Cancel
              </Button>
            </div>
          </Card>
        )}

        {/* Existing notes */}
        {notes.map((note) => (
          <Card key={note.id} className="p-4 bg-muted/30">
            {editingNoteId === note.id ? (
              <>
                <Textarea
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  rows={4}
                  className="mb-3"
                  autoFocus
                />
                <div className="flex gap-2">
                  <Button size="sm" onClick={handleSaveEdit}>
                    <Save className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                  <Button size="sm" variant="outline" onClick={handleCancelEdit}>
                    <X className="h-4 w-4 mr-2" />
                    Cancel
                  </Button>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <p className="text-sm whitespace-pre-wrap flex-1">{note.content}</p>
                  <div className="flex gap-1">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleStartEdit(note.id, note.content)}
                    >
                      <Edit2 className="h-3 w-3" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => deleteNote(note.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  {note.createdAt !== note.updatedAt ? 'Updated' : 'Created'} {formatDate(note.updatedAt)}
                </p>
              </>
            )}
          </Card>
        ))}

        {notes.length === 0 && !isAdding && (
          <div className="text-center py-8 text-muted-foreground">
            <p>No notes yet. Click "Add Note" to get started.</p>
          </div>
        )}
      </div>
    </Card>
  );
}
