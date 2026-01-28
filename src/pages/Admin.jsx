import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { motion } from 'framer-motion';
import { Database, User, Mail, Calendar, MessageSquare, Trash2, ExternalLink } from 'lucide-react';

const Admin = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      setLoading(true);

      if (!supabase) {
        throw new Error('Supabase client not initialized. Please add your credentials to the .env file.');
      }

      const { data, error } = await supabase
        .from('submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setSubmissions(data || []);
    } catch (err) {
      console.error('Error fetching submissions:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteSubmission = async (id) => {
    if (!window.confirm('Are you sure you want to delete this submission?')) return;

    try {
      if (!supabase) {
        throw new Error('Supabase client not initialized.');
      }

      const { error } = await supabase
        .from('submissions')
        .delete()
        .eq('id', id);

      if (error) throw error;
      setSubmissions(submissions.filter(s => s.id !== id));
    } catch (err) {
      alert('Error deleting submission: ' + err.message);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-web-purple/30 border-t-web-purple rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8 pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-4xl font-bold tracking-tighter mb-2">Admin Dashboard</h1>
            <p className="text-gray-400">Manage project inquiries and contact requests.</p>
          </div>
          <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-2xl flex items-center gap-3">
            <Database className="w-5 h-5 text-web-purple" />
            <span className="font-mono text-sm">{submissions.length} Submissions</span>
          </div>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-2xl mb-8 text-red-400">
            <p className="font-bold mb-1">Connection Error</p>
            <p className="text-sm opacity-80">{error}. Please check your Supabase credentials in .env</p>
          </div>
        )}

        <div className="grid grid-cols-1 gap-6">
          {submissions.length === 0 && !error ? (
            <div className="text-center py-24 border border-dashed border-white/10 rounded-3xl">
              <MessageSquare className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No submissions yet.</p>
            </div>
          ) : (
            submissions.map((sub, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                key={sub.id}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all group"
              >
                <div className="flex flex-col md:flex-row justify-between gap-8">
                  <div className="flex-1 space-y-6">
                    <div className="flex flex-wrap gap-4 items-center">
                      <div className="flex items-center gap-2 bg-web-purple/10 text-web-purple px-4 py-1.5 rounded-full text-sm font-bold">
                        <Database className="w-4 h-4" />
                        {sub.project_type}
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        {new Date(sub.created_at).toLocaleDateString()}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center">
                          <User className="w-5 h-5 text-gray-400" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Client Name</p>
                          <p className="text-lg font-medium">{sub.full_name}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center">
                          <Mail className="w-5 h-5 text-gray-400" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Email Address</p>
                          <a href={`mailto:${sub.email}`} className="text-lg font-medium hover:text-web-purple transition-colors flex items-center gap-2">
                            {sub.email} <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="bg-black/40 rounded-2xl p-6 border border-white/5">
                      <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-3">Requirements</p>
                      <p className="text-gray-300 leading-relaxed">{sub.requirements}</p>
                    </div>
                  </div>

                  <div className="flex md:flex-col justify-end gap-3">
                    <button
                      onClick={() => deleteSubmission(sub.id)}
                      className="p-4 bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white rounded-2xl transition-all"
                      title="Delete Submission"
                    >
                      <Trash2 className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
