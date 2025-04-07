const aiService = require('../services/ai.service');

module.exports.getReview = async (req, res) => {
    const code = req.body.code;
    if (!code) {
        return res.status(400).json({ error: 'Code is required' });
    }
    
    try {
        const response = await aiService.generateContent(code); 
        res.send(response);
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong', details: error.message });
    }
};
